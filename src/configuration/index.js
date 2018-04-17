import configureCors from './cors'
import configureJson from './json'
// import configureJsonWebTokens from './jsonWebTokens'
import configureLogging from './logging'
// import configureStatic from './static'

const configureApp = app => {
  // Configure JSON with `body-parser` first.
  configureJson(app)

  // Configure Cross-Origin Resource Sharing (CORS).
  configureCors(app)

  // // Serve static assets from the build directory for production builds.
  // if (process.env.NODE_ENV === 'production') {
  //   configureStatic(app)
  // }

  // Enable console logging for the API.
  configureLogging(app)
}

export default configureApp
