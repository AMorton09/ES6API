import { static as exStatic } from 'express'

import { dir } from '@/constants'

const configureStatic = app => app.use(exStatic(dir.build))

export default configureStatic
