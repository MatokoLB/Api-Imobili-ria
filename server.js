// import jsonServer from 'json-server';
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.Port || 3200;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

// server.js
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('Servidor ativo:http://localhost:3000')
})