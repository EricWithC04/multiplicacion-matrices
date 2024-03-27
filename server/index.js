import express from "express"
const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.post("/matrixMultiplication", (req, res) => {

    const matrix1 = req.body.matrix1
    const matrix2 = req.body.matrix2
    const newMatrix = []

    let rowsA = matrix1.length;
    let colsA = matrix1[0].length;
    let rowsB = matrix2.length;
    let colsB = matrix2[0].length;

    if (colsA !== rowsB) {
        console.error("No se pueden multiplicar las matrices. El número de columnas de la primera matriz no coincide con el número de filas de la segunda matriz.");
        return;
    }

    for (let i = 0; i < rowsA; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < colsB; j++) {
            newMatrix[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                newMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    res.status(200).json(newMatrix)
})

app.listen(3000, () => {
    console.log("Server listen on port 3000");
})
