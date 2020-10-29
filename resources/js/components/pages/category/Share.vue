<template>
    <div class="row forgotPasswordModal align-items-center m-0">
        <div class="col-md-4 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body py-5 px-5">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Share</h2>
                        <div class="discard">
                            <router-link to="/dashboard">
                                Close
                            </router-link>
                        </div>
                    </div>

                    <div class="form-group text-left my-4">
                        <div class="row align-items-end">
                            <div class="col-md-8">
                                <label for="email">Invite Someone</label>
                                <div class="input-group permissionAddon member_permission">
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                           placeholder="Add Email">
                                    <div class="drop-addon">
                                        <button class="btn btn-default permissionDropdown" type="button"
                                                id="permissionDropdown0"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Can view <img src="/assets/images/Arrow_icon.svg" alt="">
                                        </button>
                                        <div class="dropdown-menu"
                                             aria-labelledby="permissionDropdown0">
                                            <a class="dropdown-item owner" href="#">Make owner</a>
                                            <a class="dropdown-item" href="#">Can view</a>
                                            <a class="dropdown-item" href="#">Can use</a>
                                            <a class="dropdown-item" href="#">Can edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <router-link to="/dashboard">
                                    <button type="button" id="add-category-button" class="btn btn-default">Invite
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <p>Members</p>

                    <div class="members">
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_image mr-3">
                                    <img src="/assets/user-images/user1.png" alt="">
                                </div>
                                <div class="member_name">
                                    <span>Richard Smith</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <span class="owner">Owner</span>
                            </div>
                        </div>
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_image mr-3">
                                    <img src="/assets/user-images/user2.png" alt="">
                                </div>
                                <div class="member_name">
                                    <span>Kathryn Murphy</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <button class="btn btn-default permissionDropdown" type="button"
                                        id="permissionDropdown2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Can view <img src="/assets/images/Arrow_icon.svg" alt="">
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="permissionDropdown2">
                                    <a class="dropdown-item owner" href="#">Make owner</a>
                                    <a class="dropdown-item" href="#">Can view</a>
                                    <a class="dropdown-item" href="#">Can use</a>
                                    <a class="dropdown-item" href="#">Can edit</a>
                                    <hr>
                                    <a class="dropdown-item" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_image mr-3">
                                    <img src="/assets/user-images/user3.png" alt="">
                                </div>
                                <div class="member_name">
                                    <span>Anthony James</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <button class="btn btn-default permissionDropdown" type="button"
                                        id="permissionDropdown3"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Can edit <img src="/assets/images/Arrow_icon.svg" alt="">
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="permissionDropdown3">
                                    <a class="dropdown-item owner" href="#">Make owner</a>
                                    <a class="dropdown-item" href="#">Can view</a>
                                    <a class="dropdown-item" href="#">Can use</a>
                                    <a class="dropdown-item" href="#">Can edit</a>
                                    <hr>
                                    <a class="dropdown-item" href="#">Delete</a>
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
    export default {}
</script>

<style scoped>

    .permissionDropdown {
        background: none;
        border: none;
        padding: 0;
    }

    .permissionAddon {
        position: relative;
    }

    .member_permission .dropdown-menu {
        border-radius: 10px;
    }

    .member_permission .dropdown-menu .dropdown-item {
        padding: 10px 25px;
    }

    .permissionAddon .drop-addon {
        position: absolute;
        right: 13px;
        top: 13px;
    }

    .category-colors span i {
        font-size: 38px;
        margin: 0 10px 20px;
    }

    .discard a {
        color: #DB4C3F;
    }

    .forgotPasswordModal {
        height: 100vh;
        background: #C3C3C3;
    }

    .forgotPasswordModal .title {
        font-size: 38px;
        margin-bottom: 13px;
    }

    .line-or p {
        position: absolute;
        bottom: -25px;
        left: -8px;
    }

    .button-with span {
        vertical-align: middle;
    }

    #add-category-button {
        background-color: #DB4C3F;
        color: white;
        border: none;
        height: 58px;
        border-radius: 10px;
        width: 100%;
    }

    .line-group .line, .line-group .line-or p {
        border-color: #B8B8B8;
        color: #B8B8B8;
    }

    .owner {
        color: #DB4C3F
    }

    .new-here span {
        color: #DB4C3F
    }

    .form-group input.form-control {
        height: 58px;
        border-radius: 10px;
        border: none;
        background-color: #F5F5F5;
    }

    .password-group i {
        position: absolute;
        right: 18px;
        top: 18px;
        font-size: 20px;
        cursor: pointer;
    }

    .input-group > .form-control:focus, .input-group > .custom-select:focus, .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
        z-index: 0;
    }

    .login-with .button-with button {
        height: 58px;
        border: none;
        background-color: #F5F5F5;
        border-radius: 10px;;
    }

    .card {
        border-radius: 20px
    }

    .members .member {
        margin-top: 25px;
    }
</style>
