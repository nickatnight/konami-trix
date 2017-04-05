import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/konami-trix',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'konamiTrix',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', include},
    ]
  }
}
