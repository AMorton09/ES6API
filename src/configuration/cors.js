// Configure any CORS headers.
const configureCors = app =>
  app.use((req, res, next) => {
    /**
     * TODO: You will want to create an array of whitelisted IP addresses instead of using `*`.
     * These IP addresses can be defined in a `.env` file that will be added server-side.
     *
     * NOTE: You never want someone to have access to your environmental variables.
     * These should be stored separately from a SCM (i.e. GitHub or Bitbucket) that
     * only your team has access to.
     */

    // TODO: Write a comment about what these headers mean in an HTTP response.
    res.setHeader('Access-Control-Allow-Origin', '*')

    // TODO: Write a comment about what these headers mean in an HTTP response.
    res.setHeader(
      'Access-Control-Allow-Methods',
      'DELETE, GET, OPTIONS, POST, PUT'
    )

    // TODO: Write a comment about what these headers mean in an HTTP response.
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin, Authorization, Content-Length, Content-Type, X-Requested-With'
    )

    /**
     * Set to true if you need the website to include
     * cookies in the requests sent to the API.
     * (e.g. in case you use sessions)
     */
    // TODO: Write a comment about what these headers mean in an HTTP response.
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Intercepts OPTIONS method for `pre-flight` requests.
    if (req.method === 'OPTIONS') {
      res.sendStatus(200)
    }

    // Pass to next layer of middleware.
    next()
  })

export default configureCors
