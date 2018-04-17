import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
/**
 * NOTE: If there are any errors regarding webpack's entry
 * configuration, check the `config/dependencies.babel.js` file
 * for instructions on resolving the errors by excluding the
 * vendor dependency that is throwing an error.
 */
import entries from './dependencies.babel'
import PATHS from './paths.babel'

const vendorLibraryName = 'vendors_lib'

const vendorConfig = {
  context: PATHS.root,
  devtool: '#source-map',
  entry: entries,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'vendors.dll.js',
    library: vendorLibraryName,
    path: PATHS.dll
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DllPlugin({
      name: vendorLibraryName,
      path: PATHS.vendorManifest
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

export default vendorConfig
