FROM node

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]