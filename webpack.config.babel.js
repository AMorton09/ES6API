import merge from 'webpack-merge'

import commonsConfig from './config/webpack.config.commons.babel'
import developmentConfig from './config/webpack.config.development.babel'
import productionConfig from './config/webpack.config.production.babel'

const myWebpackConfig =
  process.env.NODE_ENV === 'production'
    ? merge(commonsConfig, productionConfig)
    : merge(commonsConfig, developmentConfig)

export default myWebpackConfig
