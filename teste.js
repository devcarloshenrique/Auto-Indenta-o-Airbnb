// O erro na linha do express é comum pq a biblioteca do express não está instalada
import express from 'express';

class App {
  
          constructor() {
    
    
            this.server = express();
    
    
            this.middlewares();
    
    
                            this.routes();
  }

            middlewares() {
    this.server.use(express.json());
          }

  routes() {
            this.server.use(routes);
  }         }

// O único atributo ou metodo que pode ser acessado é o server;
export default



new App().server;
