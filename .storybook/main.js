module.exports = {
    stories: ['../resources/assets/js/**/*.stories.[tj]s'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx', '.vue');
        return config;
    },
};
