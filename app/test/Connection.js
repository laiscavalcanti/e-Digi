import Connection from "../config/Connection.js"
import account from "../config/db_config.js"

const conn = new Connection();

try {
    conn.connect()
    console.log("Conexão estabelecida com sucesso!")
} catch (err) {
    console.error(`Erro na conexão com a base de dados:  + ${err}`)
}

try {
    conn.close()
    console.log("Conexão ao banco de dados encerrada")
} catch (err) {
    console.error(err)
}

