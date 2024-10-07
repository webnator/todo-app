FROM node:18-alpine

WORKDIR /app
COPY . /app

RUN npm install --omit=dev

RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
