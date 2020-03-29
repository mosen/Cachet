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
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        });


        config.module.rules.push({
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                }
            ]
        });

        config.module.rules.push({
           test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [
             'file-loader',
           ],
        });

        config.module.rules.push({
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            loader: '@kazupon/vue-i18n-loader'
        });

        return config;
    },
};
