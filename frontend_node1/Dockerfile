# Imagem de Origem
FROM node:13-alpine as build

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

COPY . .

RUN npm ci --silent
RUN npm run build

# Starting NGNIX
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html