const express = require('express')
const morgan = require("morgan")
const app = express()

app.set('port', process.env.PORT || 8080)

const indexRouter = require("./routes/index")
const apiRouter = require("./routes/api")

app.use(morgan("dev"));
app.use(express.json())
app.use("/", indexRouter)
app.use("/api", apiRouter)

app.listen(app.get('port'), () => {
    console.log("살려줘요");
})