require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors =  require('cors')
const Person = require('./models/person')

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.get('/info', (request, response) => {
  let totalPerson = Person.length
  const time = new Date()
  console.log(time)
  response.send(`<h1>Phonebook has info for ${totalPerson}</h1><br><p>${time}</p>`)
})

// get all
app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons)
      console.log(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  Person
    .findById(id)
    .then(person => {
      person ? response.json(person) : response.status(404).end()
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'Malformatted id' })
    })
})

// delete
app.delete('/api/persons/:id', (request,response, next) => {
  const id = request.params.id
  Person.findByIdAndRemove(id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))

})

// post
app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch( error => next(error))
})

// update
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



