const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@store': path.resolve(__dirname, './src/store'),
            '@components': path.resolve(__dirname, './src/views/components'),
        }
    }
}
