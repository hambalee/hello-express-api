import express from "express"
import db from "./db.js"

const app = express()
app.use(express.json())


app.get("/", function(request, response){
    response.json({title: "Once upon an Algorithm"})
})

app.post("/book", function(request, response){
    const {title, author} = request.body

    const statement = db.prepare("INSERT INTO books (title, author) VALUES (?,?)")
    const result = statement.run(title, author)

    response.json(result)
})

app.get("/book", function (request, response){
    const statement = db.prepare("SELECT * FROM books")
    const result = statement.all()
    response.json(result)
})

app.get("/book/:id", function(request, response){
    const { id } = request.params
    const statement =  db.prepare("SELECT * FROM books WHERE id = ?")
    const result = statement.get(id)
    response.json(result)
})

app.listen(8000)