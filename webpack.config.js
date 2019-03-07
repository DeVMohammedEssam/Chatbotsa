const path = require("path");

module.exports = env => {
  const isProd = env === "production";
  return {
    mode: isProd ? "production" : "development",
    entry: [
      "./src/index.js",
      "./src/style/scss/default.scss",
      "./src/style/scss/orangeStyle.scss"
    ],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },

    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /default.s?css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "default.build.css",
                outputPath: "/css"
              }
            },
            "extract-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /orangeStyle.s?css/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "orangeStyle.build.css",
                outputPath: "/css"
              }
            },
            "extract-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    devtool: isProd ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
