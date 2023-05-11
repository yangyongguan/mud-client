const { createProxyMiddleware } = require('http-proxy-middleware')
const Proxy = require('./envConfig').local.Proxy
module.exports = function (app) {
    if (process.env.BUILD_ENV === 'local') {
        app.use(
            createProxyMiddleware('/api', {
                target: Proxy,
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            })
        )
    }
}
