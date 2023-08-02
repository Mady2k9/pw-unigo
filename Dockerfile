FROM public.ecr.aws/i3c5v1i2/node:16.18.0-alpine
RUN npm install -g pnpm

EXPOSE 3000
WORKDIR /app
COPY package.json .
COPY pnpm-*.yaml .
COPY . .
RUN pnpm install
RUN pnpm build
CMD ["pnpm", "start"]
