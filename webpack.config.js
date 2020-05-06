const HtmlWebPackPlugin = require("html-webpack-plugin");
const  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

// const configureSassLoader = () => ({
//     test: /\.s?css$/,
//     use: [
//       { loader: MiniCssExtractPlugin.loader },
//       {
//         loader: 'css-loader',
//         options: {
//           sourceMap: isDevMode,
//           importLoaders: 2
//         }
//       },
//       {
//         loader: 'resolve-url-loader',
//         options: {
//           sourceMap: isDevMode,
//           engine: 'rework'
//         }
//       },
//       {
//         loader: 'sass-loader',
//         options: {
//           sourceMap: isDevMode
//         }
//       }
//     ]
//   });

module.exports = {
    // use to set new entry point other than index.js
    // entries: {
    //     browser: './src/index.tsx'
    // },
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
                {
                loader: "html-loader"
                }
            ]
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ],
        },
        //configureSassLoader(),
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    }
    // plugins: [
    //   new HtmlWebPackPlugin({
    //     template: "./src/index.html",
    //     filename: "./index.html"
    //   }),
    //   new ForkTsCheckerWebpackPlugin({})       
    // ]
  };