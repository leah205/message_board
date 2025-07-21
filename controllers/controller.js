idCounter = 3
const messages = [
    {
        text: "Good morning",
        user: "amanda",
        added: new Date(),
        id: 1,
    },
    {
        text: "Hello",
        user: "steve",
        added: new Date(),
        id: 2
        
    }
]

async function getNew(req, res){
    res.render("form")
}

async function postNew(req, res){
    let messageText = req.body.messageText
    let name = req.body.name
    
    messages.push({
        text: messageText, 
        user: name, 
        added: new Date(),
        id: idCounter
    })
    idCounter += 1
    res.redirect("/")
}

async function getIndex(req, res){
    res.render("index", {title: "Mini Messageboard",
        messages: messages})
}

async function getMessage(req, res, next){
    let id = req.params.id
    let message = messages.find((m) => m.id == id)
    if(!message){
        next("404 Not found")
    }
    res.render("message", {message: message})
}

module.exports = {getIndex, getNew, postNew, getMessage}