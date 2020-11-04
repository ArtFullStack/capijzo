<template>
    <div class="settings-header-container d-flex align-items-center">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-3">
                    <h4 class="m-0">Settings</h4>
                </div>
                <div class="col-md-3 offset-md-6">
                    <div class="back-to-dashboard">
                        <router-link to="/dashboard">
                            <span>
                                <i class="fas fa-chevron-left"></i>
                                <span class="ml-2">Back to Dashboard</span>
                            </span>
                        </router-link>
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
    .settings-header-container {
        width: 1440px;
        margin: 0 auto;
        background: white;
        height: 100%;
    }

    .back-to-dashboard span{
      color: #DB4C3F
    }
</style>
