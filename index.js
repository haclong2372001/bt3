const express = require('express')
const app = express()
const morgan = require('morgan')
const router = require('./router')
const path = require('path')
const PORT = 3001
const cors = require('cors')
const dotenv = require('dotenv')
app.use(express.json()) 
app.use(cors({ // dung de cho phep mot ten mien co dinh  truy cap vo (neu de '*' thi mien nao cung truy cap)
    origin : "*"
}))
app.use(morgan("combined"))
app.use(router)
app.use(express.static(path.join(__dirname, 'data')))

app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:"+PORT)
})