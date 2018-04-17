const LoginController = app => {
  app.post('/auth/login', (req, res) => {
    // Hardcoded check - will want to abstract this to reference mongoDB in the `controllers/auth` directory.
    if (req.body.username === 'valid@email.com') {
      res.json({
        // Grab user data from mongoDB after verification.
        data: { id: 1, name: 'Dude man' },
        // Implement JSON Web tokens.
        token: 'myUniqueToken-Teehee'
      })
    } else {
      res.sendStatus(401)
    }
  })
}

export default LoginController
