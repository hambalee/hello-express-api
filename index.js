import express from "express"

const app = express()

app.get("/", function(request, response){
    response.json({title: "Once upon an Algorithm"})
})

app.listen(8000)