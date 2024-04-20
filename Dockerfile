FROM node:latest as builder

WORKDIR /app

COPY package*.json .

RUN npm i -g pnpm && pnpm install

COPY . .

RUN pnpm build

FROM nginx:1.25-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["sh", "-c", "nginx -g 'daemon off;'"]
