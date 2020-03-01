From node:12-stretch
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node src/app.js
EXPOSE 5000