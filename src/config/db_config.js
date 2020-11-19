import "dotenv/config"

const account = {
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
}
export default account
