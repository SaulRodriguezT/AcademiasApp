import {createPool} from "mysql2/promise"
import db from "./config.js"

export const pool = createPool({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database
})
