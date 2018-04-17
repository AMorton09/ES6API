import webpack from 'webpack'

const loadJavaScript = ({ include, exclude, query }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        loader: 'babel-loader',

        query
      }
    ]
  }
})

const setFreeVariable = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)

  return {
    plugins: [new webpack.DefinePlugin(env)]
  }
}

export { loadJavaScript, setFreeVariable }
