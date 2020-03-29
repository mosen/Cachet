import Vue from "vue";
import SettingsSidebar from "./SettingsSidebar.vue";

export default { title: "SettingsSidebar" };

export const normal = () => ({
    components: { SettingsSidebar },
    template: '<SettingsSidebar></SettingsSidebar>',
});
