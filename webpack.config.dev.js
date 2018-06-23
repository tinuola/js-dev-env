import path from 'path';

export default {
  debug: true, //allows debugging
  devtool: 'inline-source-map',
  noInfo: false, //displays list of files being bundled
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //could be set to "node" if creating app to work in node
  output: { //where to create dev bundle
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [], // plugins to enhance webpack ex: linters, hot reload
  module: { // telling webpack what file types to handle
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
