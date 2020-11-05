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
                            <h2 class="settings-content-title">General Settings</h2>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>First Day Of Week</label>
                                        <Multiselect
                                            v-model="categories.value"
                                            :searchable="false"
                                            placeholder=""
                                            selectLabel=""
                                            deselectLabel=""
                                            label="name"
                                            track-by="value"
                                            :options="categories.options"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-3">
                                        <label>Time Zone</label>
                                        <Multiselect
                                            v-model="timeZones.value"
                                            :searchable="false"
                                            placeholder=""
                                            selectLabel=""
                                            deselectLabel=""
                                            label="name"
                                            track-by="value"
                                            :options="timeZones.options"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mt-3">
                                        <label>Auto Accept Invite</label>
                                        <p>Sharing invitation of category, label and snippet</p>
                                        <toggle-button
                                            :value="false"
                                            :labels="false"
                                            switch-color="#fff"
                                            css-colors="true"
                                        />
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
    import Multiselect from 'vue-multiselect'
    import {ToggleButton} from 'vue-js-toggle-button'


    export default {

        data() {
            return {
                categories: {
                    value: [
                        {name: 'Monday', value: 'monday'},
                    ],
                    options: [
                        {name: 'Monday', value: 'monday'},
                        {name: 'Tuesday', value: 'tuesday'},
                        {name: 'Wednesday', value: 'wednesday'},
                        {name: 'Thursday', value: 'thursday'},
                        {name: 'Friday', value: 'friday'},
                        {name: 'Saturday', value: 'saturday'},
                        {name: 'Sunday', value: 'sunday'}
                    ]
                },
                timeZones: {
                    value: [
                        {name: '(GMT - 04:00) - America/Halifax', value: 'America/Halifax'},
                    ],
                    options: [
                        {name: '(GMT - 04:00) - America/Halifax', value: 'America/Halifax'},
                    ]
                }
            }
        },

        components: {
            SettingsHeader,
            SettingsSidebar,
            Multiselect,
            ToggleButton
        }
    }
</script>

<style scoped>

</style>
