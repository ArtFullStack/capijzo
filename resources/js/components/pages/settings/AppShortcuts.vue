import {ToggleButton} from "vue-js-toggle-button";
<template>
    <div class="settings-page pb-5">
        <div class="settings-page-header">
            <SettingsHeader/>
        </div>
        <div class="settings-container">
            <div class="settings-main pt-5">
                <div class="row">
                    <div class="col-md-3">
                        <SettingsSidebar/>
                    </div>
                    <div class="col-md-9">
                        <div class="settings-content">
                            <h2 class="settings-content-title">App Shortcuts</h2>
                            <div class="container-fluid p-0 mt-4 shortcuts-page">
                                <div class="row">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="keyboard-shortcut">
                                            <p class="shortcuts-page-titles">Keyboard Shortcut</p>
                                            <p>Quickly expand snippet using keyboard shortcut (shortcode + shortcut
                                                key)</p>
                                            <div class="form-group text-left d-flex justify-content-start align-items-center mb-0">
                                                <input type="text" class="form-control" id="shortcode" value="Tab">
                                                <p class="change-action ml-5">Change</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="autocomplate">
                                            <p class="shortcuts-page-titles">Autocomplete</p>
                                            <p>Autocomplete dialog helps to search snippet faster</p>
                                            <div class="form-group d-flex align-items-center">
                                                <div class="switch">
                                                    <toggle-button
                                                            :value="false"
                                                            :labels="false"
                                                            switch-color="#fff"
                                                            css-colors="true"
                                                    />
                                                </div>
                                                <div class="switch-label ml-4">
                                                    <p class="switch-label-bold mb-2">Fuzzy Search</p>
                                                    <p class="m-0">Fuzzy search in search dialog box</p>
                                                </div>
                                            </div>
                                            <div class="form-group d-flex align-items-center">
                                                <div class="switch">
                                                    <toggle-button
                                                            :value="false"
                                                            :labels="false"
                                                            switch-color="#fff"
                                                            css-colors="true"
                                                    />
                                                </div>
                                                <div class="switch-label ml-4">
                                                    <p class="switch-label-bold mb-2">Quick Popup Search</p>
                                                    <p class="m-0">Quick popup search helps to search snippet on any
                                                        page without navigating to other page</p>
                                                </div>
                                            </div>
                                            <div class="form-group text-left d-flex justify-content-start align-items-center mb-0">
                                                <input type="text" class="form-control" id="shortcode_search"
                                                       value="CTRL + Space">
                                                <p class="change-action ml-5">Change</p>
                                            </div>
                                            <p class="shortcuts-page-titles mt-4">Number of templates shown in quick
                                                search</p>
                                            <div class="form-group text-left d-flex justify-content-start align-items-center mb-0">
                                                <input type="text" class="form-control" id="number_search" value="5">
                                                <p class="change-action ml-5">Change</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="richtext_editor">
                                            <p class="shortcuts-page-titles">Richtext Editor</p>
                                            <p>Richtext editor helps you to insert formatted texts</p>
                                            <div class="form-group d-flex align-items-center mb-0">
                                                <div class="switch">
                                                    <toggle-button
                                                            :value="false"
                                                            :labels="false"
                                                            switch-color="#fff"
                                                            css-colors="true"
                                                    />
                                                </div>
                                                <div class="switch-label ml-4">
                                                    <p class="switch-label-bold mb-2">Richtext Editor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="disabled_sites">
                                            <p class="shortcuts-page-titles">Disable App on Website/s</p>
                                            <div class="row" v-for="(sites, index) in disabledSites">
                                                <div class="col-md-10">
                                                    <div class="form-group text-left d-flex justify-content-start align-items-center mb-0">
                                                        <input type="text" class="form-control disable_site" :value="sites">
                                                        <span @click="deleteSite(index)"><i class="fas fa-times"></i></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-2" v-if="!index">
                                                    <p class="change-action" @click="addSite">Add</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SettingsHeader from '../../layouts/SettingsHeader'
    import SettingsSidebar from '../../layouts/SettingsSidebar'
    import {ToggleButton} from 'vue-js-toggle-button'

    export default {
        data() {
            return {
                disabledSites: [
                    'https://www.google.com',
                    'http://www.ox.ac.uk',
                    'http://www.ox.ac.uk'
                ],
            }
        },
        methods: {
            deleteSite(index) {
                this.disabledSites.splice(index, 1);
            },
            addSite(index) {
                this.disabledSites.push(null);
            },
        },
        components: {
            SettingsHeader,
            SettingsSidebar,
            ToggleButton
        }
    }
</script>

<style scoped>

</style>
