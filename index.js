const express = require('express')
const app = express()
app.get('/', (req, res) => res.json({message : process.env.PORT}))
app.listen(process.env.PORT || 80)