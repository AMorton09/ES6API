import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import merge from 'webpack-merge'
import webpack from 'webpack'

import PATHS from './paths.babel'

const developmentConfig = merge([
  {
    output: {
      filename: '[name].js',
      path: PATHS.output,
      pathinfo: true
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: PATHS.root,
        manifest: PATHS.vendorManifest
      }),
      new CaseSensitivePathsPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new FriendlyErrorsPlugin()
    ],
    performance: {
      hints: false
    },
    stats: 'errors-only'
  }
])

export default developmentConfig
