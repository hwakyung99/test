const express = require('express')
const app = express()
const indexRouter = require("./routes")

app.get('/', (req, res) => res.json({
    message : process.env.PORT,
    db: process.env.MONGO_URI
}))

app.use(morgan("dev"))
app.use(express.json())
app.use("/api", indexRouter)

app.listen(process.env.PORT || 80)