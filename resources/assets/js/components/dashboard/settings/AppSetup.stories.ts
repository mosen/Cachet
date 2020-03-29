import AppSetup from "./AppSetup.vue";
import "../../../../sass/dashboard.scss";

export default { title: "Settings - App Setup" };

export const normal = () => ({
    components: { AppSetup },
    template: '<div class="dashboard"><div class="page-content"><AppSetup></AppSetup></div></div>',
});
