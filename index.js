const express = require('express')
const morgan = require('morgan')
const cors =  require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

const generateId =()=> {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(person => person.id))
        : 0
    return Math.floor(Math.random() * (10000 + maxId))
}

app.get('/info', (request, response) => {
    let totalPerson = persons.length
    const time = new Date();
    console.log(time)

    response.send(`<h1>Phonebook has info for ${totalPerson}</h1><br><p>${time}</p>`)
})

// get all
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// get
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    person ? response.json(person) : response.status(404).end()
})

// delete
app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter( person => person.id !== id)
    response.status(204).end()
})

// post
app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'name is missing'
        })
    } else if(persons.find(person => person.name === body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: "number is missing"
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(person)
    console.log(person)
    response.json(person)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})



