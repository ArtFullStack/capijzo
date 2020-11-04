<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-4 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body py-5 px-5">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Add Label</h2>
                        <div class="discard">
                            <router-link to="/dashboard">
                                Discard
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
                                  <button type="button" class="btn btn-default add-button">Add Label</button>
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

    .category-colors span i {
        font-size: 32px;
        margin: 0 10px 20px;
    }
    .discard a {
        color: #DB4C3F;
    }

    .separateModal {
        height: 100vh;
        background: #C3C3C3;
    }

    .separateModal .title {
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

    .add-button {
        background-color: #DB4C3F;
        color: white;
        border: none;
        border-radius: 10px;
        width: 100%;
    }

    .line-group .line, .line-group .line-or p {
        border-color: #B8B8B8;
        color: #B8B8B8;
    }

    .new-here span {
        color: #DB4C3F
    }


    .password-group i {
        position: absolute;
        right: 18px;
        top: 18px;
        font-size: 20px;
        cursor: pointer;
    }

    .card {
        border-radius: 20px
    }

</style>
