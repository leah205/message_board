const express = require('express')
app = express()
const path = require('node:path')
const {indexRouter} = require('./routes/index.js')
const { error } = require('node:console')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
let staticPaths = path.join(__dirname, 'public')
app.use(express.static(staticPaths))
PORT = 3000

app.use("/", indexRouter)

app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})
app.use((err, req, res, next) => {
    
    res.status(err.status || 500).render('404', {message: err.message})
})
app.listen(PORT, () => {
    console.log('listening')
})
