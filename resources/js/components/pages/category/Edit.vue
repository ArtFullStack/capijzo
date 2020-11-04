<template>
    <div class="row forgotPasswordModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Edit Category</h2>
                        <div class="discard">
                            <router-link to="/dashboard">
                                Close
                            </router-link>
                        </div>
                    </div>

                    <div class="form-group text-left my-4">
                        <div class="row align-items-end">
                            <div class="col-md-8">
                                <label for="email">Category Name</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                            </div>
                            <div class="col-md-4">
                                <router-link to="/dashboard">
                                    <button type="button" id="add-category-button" class="btn btn-default">Edit
                                        Category
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <label>Category color</label>

                    <div class="category-colors">
                        <span v-for="color in colors">
                            <i class="fas fa-circle" :style="'color:'+color"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {

        data() {
            return {
                colors: []
            }
        },


        mounted() {
            for (let i = 0; i < 12; i++) {
                this.randomColor(i)
            }
        },

        methods: {
            randomColor(id) {
                const r = () => Math.floor(256 * Math.random());
                this.colors.push(`rgb(${r()}, ${r()}, ${r()})`)
            }
        }
    }
</script>

<style scoped>

    .category-colors span i {
        font-size: 32px;
        margin: 0 10px 20px;
    }

    .discard a {
        color: #DB4C3F;
    }

    .card-body {
        padding: 38px 38px 18px
    }

    .forgotPasswordModal {
        height: 100vh;
        background: #C3C3C3;
    }

    .forgotPasswordModal .title {
        font-size: 32px;
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

    .line-group .line, .line-group .line-or p {
        border-color: #B8B8B8;
        color: #B8B8B8;
    }

    .new-here span {
        color: #DB4C3F
    }

    .form-group input.form-control {
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
        border-radius: 20px
    }

    i.fas.fa-circle {
        position: relative;
    }

    i.fas.fa-circle:after {
        width: 42px;
        height: 42px;
        content: '';
        display: none;
        border: 1px solid;
        border-radius: 50%;
        left: -5px;
        top: -5px;
        position: absolute;
        cursor: pointer;
    }

    i.fas.fa-circle:hover:after {
        display: block;
    }
</style>
