<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body">
                    <h2 class="title">Forgot Password</h2>
                    <p>Type your email so we can send you a code to reset your password</p>
                    <div class="form-group text-left my-5">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>

                    <router-link to="/login">
                        <button type="button" id="login" class="btn btn-default">Reset my password</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {}
</script>

<style scoped>

    .separateModal{
        height: 100vh;
        background: #C3C3C3;
    }

    .separateModal .title{
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

    #login {
        background-color: #DB4C3F;
        color: white;
        border: none;
        height: 43px;
        border-radius: 10px;
        width: 208px;
    }

    .new-here span {
        color: #DB4C3F
    }

    .form-group input.form-control {
        height: 43px;
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

    .login-with .button-with button {
        height: 43px;
        border: none;
        background-color: #F5F5F5;
        border-radius: 10px;;
    }

    .card {
        border-radius: 20px
    }
</style>
