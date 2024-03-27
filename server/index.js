import express from "express"
const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.post("/matrixAddition", (req, res) => {

    const matrix1 = req.body.matrix1
    const matrix2 = req.body.matrix2
    const newMatrix = []

    res.status(200).json(newMatrix)
})

app.listen(3000, () => {
    console.log("Server listen on port 3000");
})
