idCounter = 3
const messages = [
    {
        text: "Good morning",
        user: "amanda",
        added: formatDate(new Date()),
        id: 1,
    },
    {
        text: "Hello",
        user: "steve",
        added: formatDate(new Date()),
        id: 2
        
    }
]

function formatDate(date){
    return date.toLocaleDateString('en-us', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

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