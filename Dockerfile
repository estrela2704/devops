# Use uma imagem base Node.js
FROM node:21-bullseye

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# Exponha a porta em que o microsserviço está ouvindo
EXPOSE 3000

# Comando para iniciar o microsserviço
CMD ["npm", "run", "start:prod"]

