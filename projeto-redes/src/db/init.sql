-- Criação e uso da base de dados "projetoredes"
CREATE DATABASE IF NOT EXISTS projetoredes;
USE projetoredes;

-- Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    email VARCHAR(256) PRIMARY KEY
);

-- Inserção de dados iniciais
INSERT INTO users (username, password, email) VALUES
('user1', 'senhauser1', 'user1@gmail.com'),
('user2', 'senhauser2', 'user2@gmail.com');