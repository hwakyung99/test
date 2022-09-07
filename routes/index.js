const express = require("express")
const router = express.Router()

router.get('/', (req, res) => res.json({
    message : process.env.PORT,
    db: process.env.MONGO_URI
}))

module.exports = router