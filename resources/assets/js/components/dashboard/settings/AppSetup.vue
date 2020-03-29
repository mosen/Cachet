<template>
    <div class="content-panel">
        <div class="content-wrapper">
            <div class="header sub-header" id="application-setup">
            <span class="uppercase" v-text="$t('dashboard.settings.app-setup.app-setup')"></span>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <form id="settings-form" name="SettingsForm" class="form-vertical" role="form" action="/dashboard/settings" method="POST">
                        <input type="hidden" name="_token" value="CSRF_TOKEN">
                        TODO errors go here
                        <fieldset>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>{{ $t('forms.settings.app-setup.site-name') }}</label>
                                        <input type="text" class="form-control" name="app_name" :value="appName" required :placeholder="$t('forms.settings.app-setup.site-name')">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>{{ $t('forms.settings.app-setup.site-url') }}</label>
                                        <input type="text" class="form-control" name="app_domain" :value="appDomain" required :placeholder="$t('forms.settings.app-setup.site-url')">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>{{ $t('forms.settings.app-setup.about-this-page') }}</label>
                                        <div class='markdown-control'>
                                            <textarea name="app_about" class="form-control autosize" rows="4" :placeholder="$t('forms.settings.app-setup.about-this-page')" v-text="rawAppAbout"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>{{ $t('forms.settings.app-setup.days-of-incidents') }}</label>
                                        <input type="number" max="100" name="app_incident_days" class="form-control" :value="daysOfIncidents" :placeholder="$t('forms.settings.app-setup.days-of-incidents')">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>{{ $t('forms.settings.app-setup.time_before_refresh') }}</label>
                                        <input type="number" name="app_refresh_rate" class="form-control" :value="appRefreshRate" :placeholder="$t('forms.settings.app-setup.time_before_refresh')">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>{{ $t('forms.settings.app-setup.major_outage_rate') }}</label>
                                        <input type="number" name="major_outage_rate" class="form-control" :value="majorOutageRate" :placeholder="$t('forms.settings.app-setup.major_outage_rate')">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="enable_subscribers">
                                            <input type="checkbox" value="1" name="enable_subscribers" :checked="enableSubscribers">
                                            {{ $t('forms.settings.app-setup.subscribers') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="suppress_notifications_in_maintenance">
                                            <input type="checkbox" value="1" name="suppress_notifications_in_maintenance" :checked="suppressNotificationsInMaintenance">
                                            {{ $t('forms.settings.app-setup.suppress_notifications_in_maintenance') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="skip_subscriber_verification">
                                            <input type="checkbox" value="1" name="skip_subscriber_verification" :checked="skipSubscriberVerification">
                                            {{ $t('forms.settings.app-setup.skip_subscriber_verification') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="display_graphs">
                                            <input type="checkbox" value="1" name="display_graphs" :checked="appGraphs">
                                            {{ $t('forms.settings.app-setup.display-graphs') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="enable_external_dependencies">
                                            <input type="checkbox" value="1" name="enable_external_dependencies" :checked="enableExternalDependencies">
                                            {{ $t('forms.settings.app-setup.enable_external_dependencies') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="show_timezone">
                                            <input type="checkbox" value="1" name="show_timezone" :checked="showTimezone">
                                            {{ $t('forms.settings.app-setup.show_timezone') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="hidden" value="0" name="only_disrupted_days">
                                            <input type="checkbox" value="1" name="only_disrupted_days" :checked="onlyDisruptedDays">
                                            {{ $t('forms.settings.app-setup.only_disrupted_days') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success">{{ $t('forms.save') }}</button>
                                </div>
                            </div>
                        </div>

                        <input type="hidden" name="remove_banner" value="">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class AppSetup extends Vue {

    constructor() {
        super();
        // this.$i18n.locale = "en";
    }

    private appName: string = "";
    private appDomain: string = "";
    private rawAppAbout: string = "";

    private daysOfIncidents: number = 7;
    private appRefreshRate: number = 0;
    private majorOutageRate: number = 50;

    private enableSubscribers: boolean = false;
    private suppressNotificationsInMaintenance: boolean = true;
    private skipSubscriberVerification: boolean = true;
    private appGraphs: boolean = true;
    private enableExternalDependencies: boolean = true;
    private showTimezone: boolean = true;
    private onlyDisruptedDays: boolean = true;
}
</script>

<style scoped>

</style>

<i18n>
    {
        "en": {
            "dashboard.settings.app-setup.app-setup": "asdasdasd"
        }
    }
</i18n>
