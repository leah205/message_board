const express = require('express')
app = express()
const path = require('node:path')
const {indexRouter} = require('./routes/index.js')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
let staticPaths = path.join(__dirname, 'public')
app.use(express.static(staticPaths))
PORT = 3000

app.use("/", indexRouter)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(404).send(err)
})
app.listen(PORT, () => {
    console.log('listening')
})
