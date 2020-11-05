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
                            <h2 class="settings-content-title">Change Password</h2>
                            <div class="container-fluid p-0 mt-4">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group text-left">
                                            <label for="old_password">Old Password</label>
                                            <div class="input-group password-group mb-2">
                                                <input :type="passwordFieldEye1" class="form-control" id="old_password">
                                                <i class="fa fa-eye-slash" aria-hidden="true"
                                                   @click="() => this.passwordFieldEye1 = this.passwordFieldEye1 == 'text' ? 'password' :  'text'"></i>
                                            </div>
                                        </div>
                                        <div class="form-group text-left">
                                            <label for="new_password">New Password</label>
                                            <div class="input-group password-group mb-2">
                                                <input :type="passwordFieldEye2" class="form-control" id="new_password">
                                                <i class="fa fa-eye-slash" aria-hidden="true"
                                                   @click="() => this.passwordFieldEye2 = this.passwordFieldEye2 == 'text' ? 'password' :  'text'"></i>
                                            </div>
                                        </div>
                                        <div class="form-group text-left">
                                            <label for="confirm_password">Confirm New Password</label>
                                            <div class="input-group password-group mb-2">
                                                <input :type="passwordFieldEye3" class="form-control"
                                                       id="confirm_password">
                                                <i class="fa fa-eye-slash" aria-hidden="true"
                                                   @click="() => this.passwordFieldEye3 = this.passwordFieldEye3 == 'text' ? 'password' :  'text'"></i>
                                            </div>
                                        </div>
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                        <div class="row login-with  with-account">
                                            <div
                                                class="col-md-10 d-flex justify-content-between flex-wrap align-items-center">
                                                <div class="button-with">
                                                    <button class="btn btn-default form-control save-changes">
                                                        <span>Set New Password</span>
                                                    </button>
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

    export default {
        data() {
            return {
                passwordFieldEye1: 'password',
                passwordFieldEye2: 'password',
                passwordFieldEye3: 'password'
            }
        },
        components: {
            SettingsHeader,
            SettingsSidebar
        }
    }
</script>

<style scoped>

</style>
