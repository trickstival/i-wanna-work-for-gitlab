// const PreloadWebpackPlugin = require('preload-webpack-plugin')

module.exports = {
    configureWebpack: {
        module: {
            rules: [
              {
                test: /\.(pdf)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: 'files/[name].[hash:8].[ext]'
                    }
                  }
                ]
              }
            ]
          }
        // plugins: [
        //     new PreloadWebpackPlugin({
        //         rel: 'prefetch',
        //         as: 'image',
        //         include: ['hey']
        //     })
        // ]
    }
}

// Added manual prefetch since it doesn't work for images right now