// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  entry: ["webpack-hot-middleware/client", "./src/index"],
  output: {
    path: path.join(__dirname, "devel"),
    filename: "report_bundle.js",
    publicPath: "/dist/",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      "process.env.SERVICE_URL": JSON.stringify(process.env.SERVICE_URL),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      { test: /\.json$/, type: "json" },
      {
        test: /\.(js)$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
