import express, { response } from "express"

const app = express()
const port = 3333

app.get("/", (request, response) => {
    response.send("<h1>Olá, mundo! Sou o backend.</h1>")
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})