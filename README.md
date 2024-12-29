Configuracao react

Pasta frontend:
npm create vite@latest
colocar nome workstream
variant botar o javascript puro
cd workstream
npm install 

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Inserir isso no tailwind-config (Caso nao tenha)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

Inserir isso no index.css (Caso nao tenha)
@tailwind base;
@tailwind components;
@tailwind utilities;

Inserir isso no vite-config: (Caso nao tenha)
  server: {
    host: true,
    strictPort: true,
    port: 5000,
  },

Teste container:
docker-compose up --build


