import Database from "better-sqlite3";

const db = new Database("book.sqlite")

db.exec("CREATE TABLE IF NOT EXISTS books(id INTEGER PRIMARY KEY, title TEXT, author TEXT)")

export default db