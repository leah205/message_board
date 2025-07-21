
const {Router} = require('express')
const indexRouter = Router()
const {getIndex, getNew, postNew, getMessage} = require('../controllers/controller.js')

indexRouter.get("/", getIndex)

indexRouter.get("/new", getNew)

indexRouter.post("/new", postNew)

indexRouter.get("/message/:id", getMessage)

module.exports = {indexRouter}