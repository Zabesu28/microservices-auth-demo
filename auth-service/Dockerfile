FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g nodemon

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["nodemon", "server.js"]