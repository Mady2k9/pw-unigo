FROM node:14-alpine

EXPOSE 3000
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
CMD ["pnpm", "start"]
