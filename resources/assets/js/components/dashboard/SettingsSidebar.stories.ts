import SettingsSidebar from "./SettingsSidebar.vue";
import "../../../sass/dashboard.scss";

export default { title: "SettingsSidebar" };

export const normal = () => ({
    components: { SettingsSidebar },
    template: '<div class="dashboard"><SettingsSidebar></SettingsSidebar></div>',
});
