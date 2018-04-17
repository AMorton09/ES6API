import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'
import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'

import PATHS from './paths.babel'
import { setFreeVariable } from './webpack.config.parts.babel'

const isProduction = process.env.NODE_ENV === 'production'

const commonsConfig = merge([
  setFreeVariable(
    'process.env.NODE_ENV',
    isProduction ? 'production' : 'development'
  ),
  {
    context: PATHS.server,
    devtool: isProduction ? 'source-map' : '#cheap-module-eval-source-map',
    entry: {
      server: PATHS.server
    },
    target: 'node',
    // Externals from: https://github.com/tahnik/react-expressjs/
    externals: [nodeExternals()],
    resolve: {
      alias: {
        '@': PATHS.server
      },
      enforceExtension: false,
      enforceModuleExtension: false,
      extensions: ['.js', '.json'],
      mainFiles: ['index'],
      modules: ['node_modules', PATHS.server],
      symlinks: true
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new CaseSensitivePathsPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }
])

export default commonsConfig
