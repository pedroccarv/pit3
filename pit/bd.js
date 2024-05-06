const mysql = require('mysql');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',/*o root e o seu usuario , o qual voce fez a conta no mysql no colegio e root por conta do padrão do cotemig*/
  password: '',/*caso va testar em outro lugar tem que trocar a senha do mysql e verificar si elas batem para que funcione corretamente*/
  database: 'BD_saude'/*nome do banco de dados*/
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err); /*caso seu banco de dados não esteja conectado ele vai mostrar essa mensagem*/ 
    return;
  }
  console.log('Conexão bem sucedida ao banco de dados MySQL!'); /* do contrario ele vai mosrar que conctou*/ 
});

// Exemplo de consulta para selecionar os seus dados do seu banco de dados

/*
connection.query('SELECT * FROM sua_tabela', (err, rows) => {/*SELECT 
  if (err) throw err;
  
  console.log('Dados retornados do banco de dados:');/*retorno das tabelas que voce fez no select acima 
  console.log(rows);
});
*/

// Fechar conexão após as consultas
connection.end()