import fs from 'fs'
import glob from 'glob'
import path from 'path'

const currentDir = process.cwd()

// Ensure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(currentDir)
const resolvePath = relativePath => path.resolve(appDirectory, relativePath)

const isProduction = process.env.NODE_ENV === 'production'

const PATHS = {
  babelConfig: require(resolvePath('config/babel.config.js')),
  build: resolvePath('dist'),
  devtoolModule: info => path.resolve(info.absoluteResourcePath),
  dll: resolvePath('dll'),
  dotenv: resolvePath('.env'),
  nodeModules: resolvePath('node_modules'),
  output: resolvePath('bin'),
  publicPath: isProduction ? './' : '/',
  root: currentDir,
  server: resolvePath('src'),
  vendorFilepath: resolvePath('dll/vendors.dll.js'),
  vendorManifest: resolvePath('dll/vendors-manifest.json'),
  yarnLockFile: resolvePath('yarn.lock')
}

export default PATHS
