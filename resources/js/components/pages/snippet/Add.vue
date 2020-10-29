<template>
    <div class="wrapper">
        <Header/>
        <Sidebar/>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid p-5">
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <h1 class="m-0 text-dark">Add a Snippet</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group text-left my-4">
                                <div class="row">
                                    <div class="col-md-6 pr-4">
                                        <label for="snippetName">Snippet Name</label>
                                        <input type="text" value="Prospecting email script" class="form-control"
                                               id="snippetName">
                                    </div>
                                    <div class="col-md-6 pl-4">
                                        <label for="shortCode">Short Code</label>
                                        <input type="text" class="form-control" id="shortCode">
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-6 pr-4">
                                        <label for="addCategory">Add Category</label>
                                        <select type="text" class="form-control" id="addCategory">
                                            <option value="Prospecting">Prospecting</option>
                                            <option value="Sales">Sales</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Procurement">Procurement</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 pl-4">
                                        <label for="addLabel">Add Label</label>
                                        <multiselect id="addLabel" v-model="value" tag-placeholder="Add this as new label" :searchable="false" placeholder="Add a label" label="name" track-by="code" :options="options" :multiple="true" :taggable="true"></multiselect>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../layouts/Header";
    import Sidebar from "../../layouts/Sidebar";
    import Multiselect from 'vue-multiselect'


    export default {
        data() {
            return {
                value: [
                ],
                options: [
                    { name: 'Email', code: 'email' },
                    { name: 'Facebook', code: 'facebook' },
                    { name: 'Twitter', code: 'twitter' },
                    { name: 'Linkedin', code: 'linkedin' }
                ]
            }
        },
        components: {
            Header,
            Sidebar,
            Multiselect
        },
    }
</script>

<style scoped>
    .form-group .form-control, .multiselect {
        height: 58px;
        border-radius: 10px;
        border: none;
        background-color: #fff;
    }


</style>
