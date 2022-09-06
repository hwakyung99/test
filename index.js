const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({
    message : process.env.PORT,
    db: process.env.MONGO_URI
}))

app.listen(process.env.PORT || 80)