FROM node:16
WORKDIR /opt/app
COPY ./index.js .
COPY ./package.json .
RUN npm install
CMD ["node", "/opt/app"]