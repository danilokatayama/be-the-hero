const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Metodos http:
  * GET: Buscar uma informacao do back-end
  * POST: Criar uma informacao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Deletar uma informacao no back-end
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, POstgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT  * FROM users
     * Query Builder: table('users').select('*').where()
     */



