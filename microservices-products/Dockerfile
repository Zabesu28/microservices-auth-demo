FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g nodemon

COPY . .

ENV PORT=8082

EXPOSE 8082

CMD ["nodemon", "--legacy-watch", "server.js"]