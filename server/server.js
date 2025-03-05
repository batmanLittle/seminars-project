const fs = require("fs");
const path = require("path");
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const dbPath = path.join(__dirname, "db.json"); // текущая база данных
const templatePath = path.join(__dirname, "db-template.json"); // копия базы данных

//копирует файл db-template.json в db.json
const resetDatabase = () => {
  fs.copyFileSync(templatePath, dbPath);
};

// Восстанавливаем базу данных только при запуске сервера
resetDatabase();

const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE" }));
server.use(middlewares);
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server запущен на http://localhost:${PORT}`);
});
