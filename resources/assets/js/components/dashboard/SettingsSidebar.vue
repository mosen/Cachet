<i18n>
{
    "en": {
        "dashboard": { "settings": {

        }}
    }
}
</i18n>

<template>
    <div class="sub-sidebar">
        <div class="sidebar-toggler visible-xs">
            <i class="ion ion-navicon"></i>
        </div>
        <h3>Settings</h3>
        <hr>
        <ul class="menu">
            <li><a href="/dashboard.settings.setup"><i class="ion ion-gear-b"></i> {{ $t('dashboard.settings.app-setup.app-setup') }}</a></li>
            <li><a href="/dashboard.settings.theme"><i class="ion ion-paintbrush"></i> {{ $t('dashboard.settings.theme.theme') }}</a></li>
            <li><a href="/dashboard.settings.stylesheet"><i class="ion ion-paintbucket"></i> {{ $t('dashboard.settings.stylesheet.stylesheet') }}</a></li>
            <li><a href="/dashboard.settings.customization"><i class="ion ion-wand"></i> {{ $t('dashboard.settings.customization.customization') }}</a></li>
            <li><a href="/dashboard.settings.localization"><i class="ion ion-earth"></i> {{ $t('dashboard.settings.localization.localization') }}</a></li>
            <li><a href="/dashboard.settings.security"><i class="ion ion-lock-combination"></i> {{ $t('dashboard.settings.security.security') }}</a></li>
            <li><a href="/dashboard.settings.analytics"><i class="ion ion-stats-bars"></i> {{ $t('dashboard.settings.analytics.analytics') }}</a></li>
            <li><a href="/dashboard.settings.log"><i class="ion ion-document-text"></i> {{ $t('dashboard.settings.log.log') }}</a></li>
            <li><a href="/dashboard.settings.credits"><i class="ion ion-ios-list"></i> {{ $t('dashboard.settings.credits.credits') }}</a></li>
            <li><a href="/dashboard.settings.mail"><i class="ion ion-paper-airplane"></i> {{ $t('dashboard.settings.mail.mail') }}</a></li>
            <li><a href="#"><i class="ion ion-flag"></i>v2.4-mosen</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class SettingsSidebar extends Vue {

}
</script>

<style scoped>

</style>
