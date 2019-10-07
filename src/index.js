// Require the framework and instantiate it
const fastify = require('fastify')({
	logger: true
})
const cors = require('cors')
fastify.use(cors())
const mongoose = require('mongoose')
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

mongoose.connect('mongodb://root:example@localhost/')
	.then(() => console.log('MongoDB connected…'))
.catch(err => console.log(err))

routes.forEach((route, index) => {
	fastify.route(route)
})
// Declare a route
fastify.get('/', async (request, reply) => {
	reply.redirect('/documentation')
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(3000)
		fastify.swagger()
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()