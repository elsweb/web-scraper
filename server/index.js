const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('tiny'))

app.get('/', (request, response) => {
	response.json({
		message: 'Hello World!'
	})
})

//https://www.belezanaweb.com.br/loucas-por-beleza/materias/dicas/
//article.post-summary

app.get('/search', (request, response) => {
	const url = `https://belezanaweb.com.br/loucas-por-beleza/materias/dicas`;
	console.log(request.param)
	response.json({
		results: []
	})
})

/*
tutorial mode
app.get('/search/:location/:search_term', (request, response) => {
	const {location, search_term} = request.params
	const url = `https://${location}.belezanaweb.com.br/loucas-por-beleza/materias/dicas/${search_term}`;
	console.log(request.param)
	response.json({
		results: []
		url
	})
})
*/

app.use((request,response, next) => {
	const error = new Error('not found')
	response.status(404)
	next(error)
})

app.use((error,request, response, next) => {
	response.status(response.statusCode || 500)
	response.json({
		message: error.message 
	})
})

app.listen(5000, () =>{
	console.log('Lisening in port 5000')
})

