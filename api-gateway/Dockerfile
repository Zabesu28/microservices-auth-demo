FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["nodemon", "--legacy-watch", "server.js"]