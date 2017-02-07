module.exports = {
  entry : "./index.js",
  output : {
    filename : "./build/build.js"
  },
  watch : true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
    },
    devServer: {
        contentBase : ".",
        port : 9000,
        inline : true
    }
}
