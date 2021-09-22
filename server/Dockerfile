FROM node:16
WORKDIR /opt/app
COPY ./server/index.js .
COPY ./server/package.json .
RUN npm install
CMD ["node", "/opt/app"]