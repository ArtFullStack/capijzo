<template>
    <div class="container login-section">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <div class="row">
                    <div class="col">
                        <div class="login-logo text-center">
                            <img src="/assets/images/Capijzo-Logo.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1 class="text-center m-0">Welcome Back!</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="text-center text-center login-continue">Login in to continue</p>
                    </div>
                </div>
                <div class="login-with">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-between flex-wrap">
                            <div class="button-with">
                                <button class="btn btn-default form-control">
                                    <img src="/assets/images/facebook.png" width="24" alt="">
                                    <span>Log in With Facebook</span>
                                </button>
                            </div>
                            <div class="button-with">
                                <button class="btn btn-default form-control">
                                    <img src="/assets/images/google.png" width="24" alt="">
                                    <span>Log in With Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-md-12 d-flex justify-content-between flex-wrap line-group">
                        <div class="line"></div>
                        <div class="line-or">
                            <p>or</p>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group text-left">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group text-left">
                            <label for="password">Password</label>
                            <div class="input-group password-group mb-2">
                                <input :type="passwordFieldEye" class="form-control" id="password">
                                <i class="fa fa-eye-slash" aria-hidden="true"
                                   @click="() => this.passwordFieldEye = this.passwordFieldEye == 'text' ? 'password' :  'text'"></i>
                            </div>
                            <router-link to="/forgot-password">
                                <span id="forgot-password" class="pt-2">Forgot password?</span>
                            </router-link>
                        </div>
                        <router-link to="/dashboard">
                            <button type="button" id="login" class="btn btn-default">Log in</button>
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="text-center new-here pt-5">
                            New here?
                            <router-link to="/register">
                                <span>Create Account</span>
                            </router-link>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
    import Footer from './Footer'

    export default {
        data() {
            return {
                passwordFieldEye: 'password'
            }
        },
        components: {
            Footer
        }
    }
</script>

<style scoped>
    .line {
        border-bottom: 1px solid;
        width: 47%;
    }

    .line-or {
        position: relative;
    }

    .line-or p {
        position: absolute;
        bottom: -25px;
        left: -8px;
    }

    .button-with {
        width: 47%;
    }

    .button-with span {
        vertical-align: middle;
    }

    .login-section {
        padding-top: 100px;
    }

    .login-continue {
        font-size: 20px;
        color: #B8B8B8;
        margin: 40px 0;
    }

    #login {
        background-color: #DB4C3F;
        color: white;
        border: none;
        height: 43px;
        border-radius: 10px;
        width: 208px;
    }

    .line-group .line, .line-group .line-or p {
        border-color: #B8B8B8;
        color: #B8B8B8;
    }

    .new-here {
        color: #B8B8B8;
        margin: 0;
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

    .password-group {
        position: relative;
    }

    .password-group i {
        position: absolute;
        right: 18px;
        top: 18px;
        font-size: 20px;
        cursor: pointer;
    }

    #forgot-password {
        color: #DB4C3F
    }

    .input-group > .form-control:focus, .input-group > .custom-select:focus, .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
        z-index: 0;
    }

    .login-with .button-with button {
        height: 43px;
        border: none;
        background-color: #F5F5F5;
        border-radius: 10px;;
    }
    @media (min-width: 768px){
        .col-md-6 {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 44%;
        }
    }

</style>
