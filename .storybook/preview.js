import { configure } from '@storybook/vue';

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

configure(require.context('../resources/assets/js', true, /\.stories\.ts$/), module);

