/**
 * Local Developer Authentication Service.
 * Replaces the xAI / Cursor OAuth and loopback server flow with a persistent,
 * local-developer identity so open-grokbot starts up authorized and responsive
 * without network or browser login requirements.
 */

export interface LocalAuthUser {
  authId: string;
  email: string;
  displayName: string;
  isAnysphereUser: boolean;
  profilePictureUrl?: string;
}

export const DEFAULT_LOCAL_USER: LocalAuthUser = {
  authId: "local-dev",
  email: "developer@local",
  displayName: "Local Developer",
  isAnysphereUser: true,
};

export interface AuthStatus {
  kind: "logged-in" | "logged-out" | "logging-in";
  authId?: string | null;
  email?: string | null;
  displayName?: string | null;
  profileReady?: boolean;
  isAnysphereUser?: boolean;
  profilePictureUrl?: string;
  freshness?: number;
}

export class SandCursorAuthService {
  public environment: unknown;
  public user: LocalAuthUser;
  public listeners = new Set<(status: AuthStatus) => void>();
  public loginFlight = { kind: "idle" };
  public loginFlightListeners = new Set<(flight: { kind: string }) => void>();
  public publishedStatusKind: "logged-in" | "logged-out" | "logging-in" = "logged-in";
  public credentialState = "active";
  public authOperationEpoch = 1;
  public getTeamId: (options?: unknown) => Promise<number | undefined>;

  constructor(options: { environment?: unknown } = {}) {
    this.environment = options.environment;
    this.user = { ...DEFAULT_LOCAL_USER };
    this.getTeamId = async () => 1;
  }

  public noteUnauthenticatedResponse(): void {
    // Local developer mode: tokens never expire, ignore unauthenticated signals.
  }

  public revokeForAccountRefusal(_account: unknown): void {
    // Local developer mode: keep account active.
  }

  public async getStatus(): Promise<AuthStatus> {
    return {
      kind: "logged-in",
      authId: this.user.authId,
      email: this.user.email,
      displayName: this.user.displayName,
      profileReady: true,
      isAnysphereUser: this.user.isAnysphereUser,
      profilePictureUrl: this.user.profilePictureUrl,
    };
  }

  public async getValidAccessToken(_options?: unknown): Promise<string> {
    return "local-dev-access-token";
  }

  public peekAccessToken(): string {
    return "local-dev-access-token";
  }

  public async exportTokens(): Promise<{ accessToken: string; refreshToken: string }> {
    return {
      accessToken: "local-dev-access-token",
      refreshToken: "local-dev-refresh-token",
    };
  }

  public async login(): Promise<AuthStatus> {
    const status = await this.getStatus();
    this.emitStatus(status);
    return status;
  }

  public async logout(): Promise<AuthStatus> {
    // In local dev mode, remain logged in.
    return await this.getStatus();
  }

  public async addAccount(): Promise<AuthStatus> {
    return await this.getStatus();
  }

  public async removeSavedAccount(_id: string): Promise<void> {
    return Promise.resolve();
  }

  public async switchToSavedAccount(_id: string): Promise<AuthStatus> {
    return await this.getStatus();
  }

  public getLoginFlight(): { kind: string } {
    return this.loginFlight;
  }

  public async cancelLoginFlight(): Promise<void> {
    return Promise.resolve();
  }

  public async updateDisplayName(name: string): Promise<AuthStatus> {
    this.user.displayName = name;
    const status = await this.getStatus();
    this.emitStatus(status);
    return status;
  }

  public async updateProfilePicture(url: string): Promise<AuthStatus> {
    this.user.profilePictureUrl = url;
    const status = await this.getStatus();
    this.emitStatus(status);
    return status;
  }

  public async getSelectedTeamId(): Promise<number> {
    return 1;
  }

  public async setSelectedTeamId(_id?: number, _scope?: string): Promise<{ kind: string }> {
    return { kind: "updated" };
  }

  public async getSelectedTeamSnapshot(): Promise<{ kind: string; teamId: number; accountScope: string }> {
    return {
      kind: "replace",
      teamId: 1,
      accountScope: this.user.authId,
    };
  }

  public async getSelectedTeamIdForAccountScope(_scope?: string): Promise<number> {
    return 1;
  }

  public backendAuth(): {
    getAccessToken: (opts?: unknown) => Promise<string>;
    getTeamId: (opts?: unknown) => Promise<number | undefined>;
  } {
    return {
      getAccessToken: async (opts?: unknown) => this.getValidAccessToken(opts),
      getTeamId: this.getTeamId,
    };
  }

  public async devLogin(_req: unknown): Promise<AuthStatus> {
    return await this.getStatus();
  }

  public subscribe(listener: (status: AuthStatus) => void): () => void {
    this.listeners.add(listener);
    Promise.resolve().then(async () => {
      if (this.listeners.has(listener)) {
        listener(await this.getStatus());
      }
    });
    return () => {
      this.listeners.delete(listener);
    };
  }

  public subscribeLoginFlight(listener: (flight: { kind: string }) => void): () => void {
    this.loginFlightListeners.add(listener);
    Promise.resolve().then(() => {
      if (this.loginFlightListeners.has(listener)) {
        listener(this.loginFlight);
      }
    });
    return () => {
      this.loginFlightListeners.delete(listener);
    };
  }

  public emitStatus(status: AuthStatus): void {
    this.publishedStatusKind = status.kind;
    for (const listener of this.listeners) {
      listener(status);
    }
  }

  public async settleSecureStorage(_timeout?: number): Promise<void> {
    return Promise.resolve();
  }

  public async mutateCredentials<T>(mutation: () => Promise<T>): Promise<T> {
    return await mutation();
  }
}
