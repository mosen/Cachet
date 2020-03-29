import { configure } from '@storybook/vue';
import '../resources/assets/sass/app.scss';

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n, {
    locale: 'en',
});

configure(require.context('../resources/assets/js', true, /\.stories\.ts$/), module);

