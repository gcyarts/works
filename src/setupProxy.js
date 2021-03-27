const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/simpleWeather/query',
        {
            "target": "http://apis.juhe.cn",
            "changeOrigin": true,
        }))
        app.use(createProxyMiddleware('/idiomJie/query',
        {
            "target": "http://apis.juhe.cn",
            "changeOrigin": true,
        }))
        app.use(createProxyMiddleware('/mobile/get',
        {
            "target": "http://apis.juhe.cn",
            "changeOrigin": true,
        }))
        app.use(createProxyMiddleware('/toutiao/index',
        {
            "target": "http://v.juhe.cn/",
            "changeOrigin": true,
        }))
}