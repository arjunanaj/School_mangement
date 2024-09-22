FROM node:16-alpine AS builder

WORKDIR /ang-std
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.27.0-alpine
COPY --from=builder /ang-std/dist/ang-std/ /usr/share/nginx/html


