import { Home } from '@/models'

const HomeController = app => {
  app.get('/', (req, res) => {
    res.send('Home page!!!!')
  })
}

export default HomeController
