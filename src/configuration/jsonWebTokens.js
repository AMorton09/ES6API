import passportJWT from 'passport-jwt'

// JWT options config
const jwtOptions = {}
const JwtStrategy = passportJWT.Strategy
jwtOptions.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = dbConfig.secret

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload)
  // mongoose call to search for user by id
  User.findById(jwt_payload.id, function (err, userData) {
    if (err) console.log(err)

    console.log(userData)

    if (userData) {
      next(null, userData)
    } else {
      next(null, false)
    }
  })
})

export { strategy }
