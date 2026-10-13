FROM node:22-bookworm-slim@sha256:c3de60bf2f9dd0ac6370e6117950ff62d6e339527e7472301c9c78a017978392
RUN apt-get update && apt-get install -y --no-install-recommends util-linux ca-certificates && rm -rf /var/lib/apt/lists/*
RUN npm install --prefix /opt/rea rea-agents@6.3.0 && cd /tmp && npm pack @wakaru/cli-linux-x64@1.13.0 && tar -xzf wakaru-cli-linux-x64-1.13.0.tgz && find package -type f && cp package/wakaru /usr/local/bin/wakaru && chmod +x /usr/local/bin/wakaru && rm -rf /tmp/package /tmp/*.tgz
RUN apt-get update && apt-get install -y --no-install-recommends procps && rm -rf /var/lib/apt/lists/*
ENV REA_WAKARU_COMMAND=/usr/local/bin/wakaru
WORKDIR /workspace
COPY patch-json-module-paths.mjs /opt/rea/patch-json-module-paths.mjs
RUN node /opt/rea/patch-json-module-paths.mjs
