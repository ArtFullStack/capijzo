<template>
    <div class="row forgotPasswordModal align-items-center m-0">
        <div class="col-md-4 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body py-4 px-4">
                    <p>Are you sure you want to delete "Sales" Category</p>

                    <div class="alert-buttons d-flex justify-content-end">
                        <div class="cancel">
                            <router-link to="/dashboard">
                                <button type="button" class="btn btn-default">Cancel</button>
                            </router-link>
                        </div>
                        <div class="delete">
                            <router-link to="/dashboard">
                                <button type="button" class="btn btn-default delete-button">Delete</button>
                            </router-link>
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

    .alert-buttons button {
        height: 58px;
        border: none;
        border-radius: 10px;
        width: 208px;
    }
    .alert-buttons .cancel button{
        background: white;
    }

    .delete-button {
        background-color: #DB4C3F;
        color: white;
    }

    .line-group .line, .line-group .line-or p {
        border-color: #B8B8B8;
        color: #B8B8B8;
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

    .card {
        border-radius: 10px
    }
</style>
