FROM node:20
WORKDIR /app

COPY ./package*.json ./
COPY ./.env.example ./.env

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]

