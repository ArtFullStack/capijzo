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
                            <div class="settings-content">
                                <h2 class="settings-content-title">Notification</h2>
                                <div class="container-fluid p-0 mt-4 notification-page">
                                    <div class="row">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p class="notify-allow">Allow Website Notification</p>
                                                <p>Allowing web notification let you know snippet sharing invitation, new features & offers. We don't spam!</p>
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
                                        <div class="col">
                                            <p class="email-notify-title">Email Notification</p>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>Snippet, Category, Label sharing invitation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>Weekly Productivity Summary</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>Account Change, Security Related Notification</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>Billing & Invoice</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>New Features and releases</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>Offers & Promotion</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="switch">
                                                <toggle-button
                                                    :value="false"
                                                    :labels="false"
                                                    switch-color="#fff"
                                                    css-colors="true"
                                                />
                                            </div>
                                            <div class="switch-label ml-4">
                                                <p>Unsubscribe All</p>
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
        components: {
            SettingsHeader,
            SettingsSidebar,
            ToggleButton
        }
    }
</script>

<style scoped>

</style>
