function getDBConfig() {
    return {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'book',
        connectionLimit: 1
    }
  }

  module.exports=getDBConfig()