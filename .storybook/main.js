const path = require('path');

module.exports = {
    addons: [
        {
            name: '@storybook/preset-typescript',
            options: {
                tsLoaderOptions: {
                    configFile: path.resolve(__dirname, '/../tsconfig.json'),
                },
                forkTsCheckerWebpackPluginOptions: {
                    colors: false, // disables built-in colors in logger messages
                },
                include: [path.resolve(__dirname, '../src')],
                transpileManager: true,
            }
        },
    ],
    stories: ['../resources/assets/js/**/*.stories.[tj]s'],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            loader: '@kazupon/vue-i18n-loader'
        });
        return config;
    },
};
