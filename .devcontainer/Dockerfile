ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim

# Work in a writable project dir
WORKDIR /workspaces/app

# Useful deps for TLS, building native modules, and git
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl git build-essential python3 \
  && rm -rf /var/lib/apt/lists/*

# Enable pnpm/yarn via Corepack
RUN corepack enable

# Sensible defaults
ENV NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false \
    NODE_ENV=development

CMD ["bash"]
