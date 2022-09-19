# base node image
FROM node:16-bullseye-slim as base
ENV CI=true
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps
WORKDIR /myapp
ADD package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

# Setup production node_modules
FROM base as production-deps
ENV NODE_ENV production
WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json pnpm-lock.yaml .npmrc ./
RUN pnpm prune --prod

# Build the app
FROM base as build
ENV NODE_ENV production
WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD . .
RUN pnpm build

# Finally, build the production image with minimal footprint
FROM base
ENV PORT 8080
ENV NODE_ENV production
WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
COPY --from=build /myapp/package.json /myapp/package.json

CMD ["npm", "run", "start"]
