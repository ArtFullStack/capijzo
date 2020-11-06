<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Add Category</h2>
                        <div class="discard">
                            <router-link to="/dashboard">
                                Discard
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
                                  <button type="button" id="add-category-button" class="btn btn-default">Add Category</button>
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
