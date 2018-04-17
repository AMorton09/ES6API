import bodyParser from 'body-parser'

const configureJson = app => {
  // Parse `application/json` content type.
  app.use(bodyParser.json())

  // Parse `application/x-www-form-urlencoded` content type.
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
}

export default configureJson
