import morgan from 'morgan'

/**
 * Initialization of morgan a console logger
 * to log all requests sent to the server
 */

const configureLogging = app => app.use(morgan('combined'))

export default configureLogging
