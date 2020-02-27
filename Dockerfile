From node:12-stretch
WORKDIR Home/Documents/nodeDockerSkull
COPY package.json Home/Documents/nodeDockerSkull
RUN npm install
COPY . Home/Documents/nodeDockerSkull
CMD node src/app.js
EXPOSE 5000