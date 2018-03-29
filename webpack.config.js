const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'Buttons/index': './src/components/Buttons/',
    'Inputs/index': './src/components/Inputs/'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'hometown-components',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'styled-components': {
      commonjs2: 'styled-components'
    },
    react: {
      commonjs2: 'react'
    },
    'react-dom': {
      commonjs2: 'react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
