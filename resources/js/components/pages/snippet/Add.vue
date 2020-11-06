<template>
    <div class="wrapper">
        <Header/>
        <Sidebar/>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid p-4">
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
                                        <input type="text" class="form-control" id="shortCode"
                                               value="email prospecting">
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-6 pr-4">
                                        <label for="addCategory">Add Category</label>
                                        <Multiselect
                                            id="addCategory"
                                            v-model="categories.value"
                                            :searchable="false"
                                            placeholder=""
                                            selectLabel=""
                                            deselectLabel=""
                                            label="name"
                                            track-by="value"
                                            :options="categories.options"
                                            :custom-label="customLabel"
                                            :show-labels="false"
                                        >
                                            <template slot="singleLabel" slot-scope="props">
                                                <span class="option__desc">
                                                    <i class="fas fa-circle" :style="{color: props.option.color}"></i>
                                                    <span class="option__title ml-1">{{ props.option.name }}</span>
                                                </span>
                                            </template>
                                            <template slot="option" slot-scope="props">
                                                <div class="option__desc">
                                                    <i class="fas fa-circle" :style="{color: props.option.color}"></i>
                                                    <span class="option__title ml-1">{{ props.option.name }}</span>
                                                </div>
                                            </template>
                                        </Multiselect>
                                    </div>
                                    <div class="col-md-6 pl-4">
                                        <label for="addLabel">Add Label</label>
                                        <Multiselect
                                            id="addLabel"
                                            v-model="labels.values"
                                            placeholder=""
                                            tag-placeholder="Add this as new label"
                                            :searchable="false"
                                            selectLabel=""
                                            deselectLabel=""
                                            label="name"
                                            track-by="value"
                                            :options="labels.options"
                                            :multiple="true"
                                            :taggable="true"/>
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
                labels: {
                    values: [
                        {name: 'Email', value: 'email'},
                    ],
                    options: [
                        {name: 'Email', value: 'email'},
                        {name: 'Facebook', value: 'facebook'},
                        {name: 'Twitter', value: 'twitter'},
                        {name: 'Linkedin', value: 'linkedin'}
                    ]
                },
                categories: {
                    value: [
                        {name: 'Prospecting', value: 'email', color: 'green'},
                    ],
                    options: [
                        {name: 'Prospecting', value: 'email', color: 'green'},
                        {name: 'Sales', value: 'facebook', color: 'yellow'},
                        {name: 'Marketing', value: 'twitter', color: 'black'},
                        {name: 'Procurement', value: 'linkedin', color: 'red'}
                    ]
                }
            }
        },
        components: {
            Header,
            Sidebar,
            Multiselect
        },
        methods: {
            customLabel({name}) {
                return name;
            }
        }
    }
</script>
