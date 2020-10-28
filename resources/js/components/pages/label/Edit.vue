<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-4 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body py-5 px-5">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Edit Label</h2>
                        <div class="discard">
                            <router-link to="/dashboard">
                                Close
                            </router-link>
                        </div>
                    </div>

                    <div class="form-group text-left my-4">
                        <div class="row align-items-end">
                            <div class="col-md-8">
                                <label for="email">Label Name</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                            </div>
                            <div class="col-md-4">
                                <router-link to="/dashboard">
                                    <button type="button" class="btn btn-default add-button">Edit Label</button>
                                </router-link>
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

    .discard a {
        color: #DB4C3F;
    }

    .separateModal {
        height: 100vh;
        background: #C3C3C3;
    }

    .separateModal .title {
        font-size: 38px;
        margin-bottom: 13px;
    }

    .add-button {
        background-color: #DB4C3F;
        color: white;
        border: none;
        height: 58px;
        border-radius: 10px;
        width: 100%;
    }
    .form-group input.form-control {
        height: 58px;
        border-radius: 10px;
        border: none;
        background-color: #F5F5F5;
    }


    .card {
        border-radius: 20px
    }
</style>
