FROM node:14
RUN npm install -g pnpm

EXPOSE 3000
WORKDIR /app
COPY package.json .
COPY pnpm-*.yaml .
COPY . .
RUN pnpm install
RUN pnpm build
CMD ["pnpm", "start"]
