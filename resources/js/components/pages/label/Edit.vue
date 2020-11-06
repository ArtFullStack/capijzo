<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body">
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
