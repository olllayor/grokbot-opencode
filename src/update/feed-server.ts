import { createReadStream, statSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';

/** The local Squirrel feed adapter (main-app.cjs A1/bot), not a remote update service. */
export class UpdateFeedServer {
  server: Server | null = null;
  constructor(private readonly context: {
    productName: string;
    invariant(condition: unknown, message: string): void;
  }) {}
  private address(server: Server): AddressInfo {
    const address = server.address();
    this.context.invariant(address != null && typeof address !== 'string', 'Squirrel feed server has no bound TCP address.');
    return address as AddressInfo;
  }
  async start(release: { zipPath: string; version: string; releaseName?: string; pubDate?: string }): Promise<string> {
    this.stop();
    const size = statSync(release.zipPath).size;
    const server = createServer((request, response) => {
      const resource = request.url?.split('?')[0];
      if (request.method !== 'GET') { response.writeHead(405).end(); return; }
      if (resource === '/feed.json') {
        response.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' }).end(JSON.stringify({
          url: `http://127.0.0.1:${this.address(server).port}/update.zip`,
          name: release.releaseName ?? `${this.context.productName} ${release.version}`,
          pub_date: release.pubDate ?? new Date().toISOString(),
        }));
        return;
      }
      if (resource === '/update.zip') {
        response.writeHead(200, { 'content-type': 'application/zip', 'content-length': size, 'cache-control': 'no-store' });
        const stream = createReadStream(release.zipPath);
        stream.on('error', () => response.destroy());
        stream.pipe(response);
        return;
      }
      response.writeHead(404).end();
    });
    this.server = server;
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });
    return `http://127.0.0.1:${this.address(server).port}/feed.json`;
  }
  stop(): void { this.server?.close(); this.server = null; }
}
