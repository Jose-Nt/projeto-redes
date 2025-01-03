FROM mysql:8.0

# Configurações do MySQL
ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=projetoredes
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

# Cria tabela de usuários padrão
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306