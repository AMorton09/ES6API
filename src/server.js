import app from '@/app'

import { apiPort, greeting } from '@/constants'

function startServer () {
  const httpServer = app.listen(apiPort, error => {
    // Greet the user with an error or greeting.
    error ? console.error(error) : console.log(greeting)
  })

  // Hot reload of `app` and related modules.
  if (module.hot) {
    let currentApp = app

    module.hot.accept('./app', () => {
      httpServer.removeListener('request', currentApp)
      // Webpack's dynamic import.
      import('./app')
        .then(myAppModule => {
          httpServer.on('request', myAppModule.default)
          currentApp = myAppModule.default
          // Notify the user that the server successfully reloaded.
          console.log('Server reloaded!')
        })
        .catch(err => console.error(err))
    })

    /**
     * Hot reload of entry module (itself).
     * It will restart http-server.
     */
    module.hot.accept()
    module.hot.dispose(() => {
      console.log('Disposing entry module...')
      httpServer.close()
    })
  }
}

// Starts the Express server.
startServer()
