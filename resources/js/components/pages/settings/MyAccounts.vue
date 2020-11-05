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
                            <h2 class="settings-content-title">My Account</h2>
                            <p class="personal-info mt-4">Personal information</p>
                            <div class="personal-info-image d-flex justify-content-start align-items-center">
                                <div v-if="url" class="person-img" :style="{backgroundImage: `url(${url})`}"></div>
                                <div v-else class="person-img" :style="{backgroundImage: 'url(https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg)'}"></div>
                                <div>
                                    <label class="edit-photo mb-0">
                                        <img src="/assets/images/pen-icon.svg" alt="">
                                        <span class="ml-2">Edit Photo</span>
                                        <input type="file" id="image" @change="onFileChange">
                                    </label>
                                </div>
                            </div>
                            <div class="container-fluid p-0 mt-4">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group text-left">
                                            <label for="full_name">Full Name</label>
                                            <input type="email" class="form-control" id="full_name"
                                                   value="Ezzeldeen Ahmed">
                                        </div>
                                        <div class="form-group text-left">
                                            <label for="email">Email Address</label>
                                            <input type="email" class="form-control" id="email"
                                                   aria-describedby="emailHelp" value="Ezzeldeen@mail.com">
                                        </div>
                                        <div class="form-group text-left mb-0">
                                            <label>Password</label>
                                            <router-link to="/settings/change-password">
                                                <p class="change-password">Change Password</p>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                        <h5>Linked Accounts</h5>
                                        <p class="py-2">Connect social media accounts to login to Capijzo,
                                            you're currently not connected</p>
                                    </div>
                                </div>
                                <div class="row login-with with-account">
                                    <div class="col-md-6 d-flex justify-content-between flex-wrap align-items-center">
                                        <div class="button-with">
                                            <button class="btn btn-default form-control">
                                                <img src="/assets/images/facebook.png" width="20" alt="">
                                                <span>Log in With Facebook</span>
                                            </button>
                                        </div>
                                        <div>or</div>
                                        <div class="button-with">
                                            <button class="btn btn-default form-control">
                                                <img src="/assets/images/google.png" width="20" alt="">
                                                <span>Log in With Google</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row del-account">
                                    <div class="col-md-6">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                        <h5>Delete Your Account</h5>
                                        <p class="py-2">By deleting your account you will lose all your data </p>
                                        <div class="row login-with with-account">
                                            <div
                                                class="col-md-10 d-flex justify-content-start flex-wrap align-items-center">
                                                <div class="button-with">
                                                    <button class="btn btn-default form-control delete-account-button">
                                                        <span>Delete Account</span>
                                                    </button>
                                                </div>
                                                <div class="button-with ml-4">
                                                    <span>Requires Password</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row save-account">
                                    <div class="col-md-6">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                        <div class="row login-with  with-account">
                                            <div
                                                class="col-md-10 d-flex justify-content-between flex-wrap align-items-center">
                                                <div class="button-with">
                                                    <button class="btn btn-default form-control save-changes">
                                                        <span>Save changes</span>
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
                url: null,
            }
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
            }
        },
        components: {
            SettingsHeader,
            SettingsSidebar
        }
    }
</script>
