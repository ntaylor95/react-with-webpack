1. Create a new project > npm init -y
2. Install webpack > npm i webpack webpack-cli --save-dev
3. Now, let's setup babel to transpile are JSX
    > npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
4. create the babel config file in .babelrc - we will move this later
5. create the webpack config file webpack.config.js
6. pull in react packages > npm i react react-dom
7. without configuring webpack, it expects the entry point to be src/index.js
8. create that entry point and add components
9. now, run webpack and let it build it's bundle > npm run  build
10. Now we need to display this bundle on some html
11. to do this, webpack needs some additional plugins
    > npm i html-webpack-plugin html-loader --save-dev
    NOTE: Loaders are different from plugins. Plugins need
    to be "imported" into the webpack.config.js file
12. Update the webpack.config.js
13. Use the plugins to define a template and output
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
14. create the index.html template page 
15. hook your component, Form.js, into the <div id="container"></div>
16. rebuild > npm run build

Good tutorials:
* https://www.valentinog.com/blog/babel/
* https://www.robinwieruch.de/minimal-node-js-babel-setup