FROM node:alpine3.16

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]