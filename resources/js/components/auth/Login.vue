<template>
    <div class="container auth-section">
        <div class="row">
            <div class="col">
                <div class="text-center auth-content">
                    <div class="row">
                        <div class="col">
                            <div class="login-logo text-center">
                                <img src="/assets/images/Capijzo-Logo.svg" alt="" width="45">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <h1 class="text-center m-0 title">Welcome Back!</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="text-center text-center login-continue">Log in to continue</p>
                        </div>
                    </div>
                    <div class="login-with">
                        <div class="row">
                            <div class="col-md-12 d-flex justify-content-between flex-wrap">
                                <div class="button-with">
                                    <button class="btn btn-default form-control">
                                        <img src="/assets/images/facebook.png" width="20" alt="">
                                        <span>Log in With Facebook</span>
                                    </button>
                                </div>
                                <div class="button-with">
                                    <button class="btn btn-default form-control">
                                        <img src="/assets/images/google.png" width="20" alt="">
                                        <span>Log in With Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row line-row">
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
                            <div class="login-button">
                                <router-link to="/dashboard">
                                    <button type="button" id="login" class="btn btn-default">Log in</button>
                                </router-link>
                            </div>
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
            </div>
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
