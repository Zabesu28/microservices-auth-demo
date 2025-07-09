require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT || 8082;

app.get("/", (req, res) => {
    res.send("Welcome to the products microservice !")
})

app.listen(PORT, () => {
    console.log(`Products microservice is listening on ${PORT}`)
})