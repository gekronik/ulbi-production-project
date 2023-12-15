import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
    return  [
        new HTMLWebpackPlugin({
            template: paths.html
        }), // нам нужно из класса создать объект, для этого используеи кострукцию new
        new webpack.ProgressPlugin(), // плагин чтобы понимать солько процентов сборки уже произошло
        new MiniCssExtractPlugin({ // позволяет выносить css код в отдельные файлы
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}