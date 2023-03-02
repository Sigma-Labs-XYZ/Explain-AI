FROM node:18-alpine

WORKDIR /web

COPY ./package*.json ./
RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run","start-watch"]