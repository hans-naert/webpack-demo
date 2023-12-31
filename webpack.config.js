const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',    
  }),
  new WorkboxPlugin.InjectManifest({
    swSrc: './src/sw.js',
  }),
  new WebpackPwaManifest({
    name: 'My Progressive Web App',
    short_name: 'MyPWA',
    description: 'My awesome Progressive Web App!',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    publicPath: './',
    icons: [
      {
        src: path.resolve('./src/assets/logo-512.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      {
        src: path.resolve('./src/assets/maskable-1024.png'),
        size: '1024x1024' // you can also use the specifications pattern
      },
      {
        src: path.resolve('./src/assets/maskable-1024.png'),
        size: '1024x1024',
        purpose: 'maskable'
      }
    ]
  })],  
};