import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import ESLintPlugin from "eslint-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* eslint-disable no-undef */
const environment = process.env["NODE_ENV"] || "development";

const soundPath = pathForRegexp("src/sounds");
const soundRegExp = new RegExp(soundPath + ".*.(mp3|ogg|wav)$", "i");

const imagePath = pathForRegexp("src/images");
const imageRegExp = new RegExp(imagePath + ".*.(jpe?g|png|gif|svg)$", "i");

const fontPath = pathForRegexp("src/fonts");
const fontRegExp = new RegExp(fontPath + ".*.(eot|svg|ttf|woff2?)$", "i");

const htmlPath = pathForRegexp("src/");
const htmlRegExp = new RegExp(htmlPath + ".*.html", "i");

function escapeForRegExp(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function pathForRegexp(url) {
  var normalized = path.resolve(__dirname, url);
  return escapeForRegExp(normalized);
}

const options = {
  extensions: ["js", "json"],
  exclude: ["./src/fonts/", "./src/images/", "./src/sounds/", "./src/tiled/"],
};
export default {
  entry: {
    index: ["./src/game"],
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/build/html",
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@scripts": path.resolve(__dirname, "./src/scripts"),
      "@sounds": path.resolve(__dirname, "./src/sounds"),
      "@systems": path.resolve(__dirname, "./src/systems"),
      "@tiled": path.resolve(__dirname, "./src/tiled"),
    },
  },
  module: {
    rules: [
      {
        test: soundRegExp,
        enforce: "pre",
        use: [
          {
            loader: "file-loader",
            options: {
              hash: "sha512",
              digest: "hex",
              name: "[path][name].[ext]",
              context: "./src",
            },
          },
        ],
      },
      {
        test: imageRegExp,
        enforce: "pre",
        use: [
          {
            loader: "file-loader",
            options: {
              hash: "sha512",
              digest: "hex",
              name: "[path][name].[ext]",
              context: "./src",
            },
          },
        ],
      },
      {
        test: fontRegExp,
        enforce: "pre",
        use: [
          {
            loader: "file-loader",
            options: {
              hash: "sha512",
              digest: "hex",
              name: "[path][name].[ext]",
              context: "./src",
            },
          },
        ],
      },
      {
        test: htmlRegExp,
        enforce: "pre",
        use: [
          {
            loader: "file-loader",
            options: {
              hash: "sha512",
              digest: "hex",
              name: "[path][name].[ext]",
              context: "./src",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(options),
    new webpack.DefinePlugin({
      __PRODUCTION__: environment === "production",
      __TEST__: environment === "test",
      __DEVELOPMENT__: environment === "development",
    }),
  ],
};
