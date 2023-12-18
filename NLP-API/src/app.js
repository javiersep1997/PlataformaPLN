import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { corsOptions } from './config/server.js'

//Import routes
import routes from './api/routes/index.routes.js'
import { notFound, error } from './api/controllers/index.js'

// Init express app
const app = express()

// Settings
app.use(cors(corsOptions))
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api', routes.nlp)

// Test endpoint
app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

// Error handler
app.use(notFound)
app.use(error)

// Export
export default app
