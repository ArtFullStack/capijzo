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
                            <h2 class="settings-content-title">Access Control</h2>
                            <div class="container-fluid p-0 mt-4 access-control-page">
                                <div class="row">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="access-control">
                                            <p class="access-control-page-title">Sharing Control</p>
                                            <p>Category, Label & Snippets sharing access for various users</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="switch">
                                            <toggle-button
                                                :value="false"
                                                :labels="false"
                                                switch-color="#fff"
                                                css-colors="true"
                                            />
                                        </div>
                                        <div class="switch-label ml-4">
                                            <p class="notify-allow mb-2">Allow users & managers to share category,
                                                label & snippet outside of the team</p>
                                            <p class="mb-1">Unable this control can restrict sharing access within
                                                organization users</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="switch">
                                            <toggle-button
                                                :value="false"
                                                :labels="false"
                                                switch-color="#fff"
                                                css-colors="true"
                                            />
                                        </div>
                                        <div class="switch-label ml-4">
                                            <p class="notify-allow mb-2">Allow users to share category, labels &
                                                snippet with other user</p>
                                            <p class="mb-1">Disable this control can restrict sharing rights to
                                                manager & administrator only</p>
                                        </div>
                                    </div>
                                </div>
                                <!--Start line-->
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <!--End line-->
                                <div class="row">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="access-control">
                                            <p class="access-control-page-title">Modification Control</p>
                                            <p>Category, Label & Snippets modification access for various users</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="switch">
                                            <toggle-button
                                                :value="false"
                                                :labels="false"
                                                switch-color="#fff"
                                                css-colors="true"
                                            />
                                        </div>
                                        <div class="switch-label ml-4">
                                            <p class="notify-allow mb-2">Allow user to add & modify category, label
                                                & snippet with other user</p>
                                            <p class="mb-1">Disable this control can restrict add & modify rights to
                                                manager & administrator only</p>
                                        </div>
                                    </div>
                                </div>
                                <!--Start line-->
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <!--End line-->
                                <div class="row">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="access-control">
                                            <p class="access-control-page-title">Add New Member</p>
                                            <p>New team member invitation rights to manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-10 d-flex align-items-center">
                                        <div class="switch">
                                            <toggle-button
                                                :value="false"
                                                :labels="false"
                                                switch-color="#fff"
                                                css-colors="true"
                                            />
                                        </div>
                                        <div class="switch-label ml-4">
                                            <p class="notify-allow mb-2">Allow manager to add new team member</p>
                                            <p class="mb-1">Disable this control can restrict adding user rights to
                                                administrator only</p>
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
