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
    .forgotPasswordModal {
        height: 100vh;
        background: #C3C3C3;
    }

    .alert-buttons button {
        height: 50px;
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

</style>
