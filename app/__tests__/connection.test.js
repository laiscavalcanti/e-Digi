import Connection from "../config/Connection.js"
import account from "../config/db_config.js"

let conn = null
describe("Connection", () => {
  beforeAll( async () => {
    conn = new Connection(account.createConnection)
    await conn.connect()
  })

  afterAll( async () => {
    await conn.close()
  })
})
