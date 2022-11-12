import express from "express"

const app = express()

app.get("/", async (req, res) => {
  res.json({message: "foi"})
})

app.listen(3080, () => {
  console.log("Servidor iniciado na porta 3080")
})