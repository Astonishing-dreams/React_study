const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware(
            '/api1',  // 只有api开头的地址才能转给后端服务器
            {
                target: 'http://localhost:5000',  // 需要转到的地址
                changeOrigin: true,  // 可写可不写这个，代理欺骗
                pathRewrite: { '^/api1': '' }
            }
        ),
        proxy.createProxyMiddleware(
            '/api2',  // 只有api开头的地址才能转给后端服务器
            {
                target: 'http://localhost:5001',  // 需要转到的地址
                changeOrigin: true,  // 可写可不写这个，代理欺骗
                pathRewrite: { '^/api2': '' }
            }
        ),
    )
}
