const PreloadWebpackPlugin = require('preload-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new PreloadWebpackPlugin({
                rel: 'preload',
                as: 'image'
            })
        ]
    }
}
