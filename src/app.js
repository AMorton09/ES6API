import express from 'express'

import configureApp from '@/configuration'
import { dir } from '@/constants'
import createEndpoints from '@/controllers'

// Instantiate the Express app.
const app = express()

// Configure the Express app.
configureApp(app)

// Create the endpoints based on the controllers.
createEndpoints(app)

export default app
