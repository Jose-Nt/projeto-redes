FROM node:18

# Diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Porta que o servidor roda (80 = porta padrão web)
EXPOSE 80

# Comando para iniciar o app assim que iniciar o docker
CMD ["node", "src/server.js"]