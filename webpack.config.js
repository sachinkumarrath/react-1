module.exports = {
  entry : "./index.js",
  output : {
    filename : "./build/build.js"
  },
  watch : false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
