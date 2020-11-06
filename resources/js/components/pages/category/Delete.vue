<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
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
