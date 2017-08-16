import 'babel-polyfill'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import clientConfig from '../webpack/client.dev'
import serverConfig from '../webpack/server.dev'

const app = express()

const multiCompiler = webpack([clientConfig, serverConfig])
const clientCompiler = multiCompiler.compilers[0]

app.use(webpackDevMiddleware(multiCompiler, { publicPath }))
app.use(webpackHotMiddleware(clientCompiler))
app.use(webpackHotServerMiddleware(multiCompiler))

app.listen(3000, () => console.log('READY'))
