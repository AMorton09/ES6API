import HomeController from './Home'
import LoginController from './Login'
// import { LoginController } from './auth'

const createEndpoints = expressApp => {
  HomeController(expressApp)
  LoginController(expressApp)
}

export default createEndpoints
