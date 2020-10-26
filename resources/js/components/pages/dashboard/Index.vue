<template>
    <div class="wrapper">
        <Header/>
        <Sidebar/>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid p-5">
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <h1 class="m-0 text-dark">My Snippets</h1>
                        </div>
                        <div class="col-md-6 d-flex justify-content-end">
                            <div class="buttons">
                                <div class="dropdown">
                                    <button class="btn btn-default" type="button" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/sort_icon.svg" alt=""> Sort <img
                                        src="/assets/images/Arrow_icon.svg" alt="">
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Top Snippets</a>
                                        <a class="dropdown-item" href="#">New Snippets</a>
                                    </div>
                                    <button class="btn btn-default add_snippet ml-3">+ Add Snippet</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <p>Snippets Name</p>
                        </div>
                        <div class="col-md-4">
                            <p>Short code</p>
                        </div>
                        <div class="col-md-4">

                        </div>
                    </div>
                    <div class="row snippet-item py-4">
                        <div class="col-md-4 d-flex align-items-center">
                            <p><i class="fas fa-circle text-danger"></i> <span
                                class="ml-3">Prospecting email script</span></p>
                        </div>
                        <div class="col-md-4 d-flex align-items-center">
                            <p><span>email prospecting </span></p>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end align-items-center snippetActions">
                            <button class="mr-2 btn btn-default btn-sm">+3 more</button>
                            <button class="mr-2 btn btn-default btn-sm">Linkedin</button>
                            <button class="mr-2 btn btn-default btn-sm">Facebook</button>
                            <button class="mr-2 btn btn-default btn-sm">Email</button>
                            <span class="ml-3">
                                 <img src="/assets/images/dots3.svg" alt="">
                            </span>
                        </div>
                    </div>
                    <div class="row snippet-item  py-4">
                        <div class="col-md-4">
                            <p><i class="fas fa-circle text-warning"></i> <span class="ml-3">Client connection request - linked in</span>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p><span>client connection</span></p>
                        </div>
                        <div class="col-md-4 d-flex justify-content-end align-items-center snippetActions">
                            <button class=" mr-2 btn btn-default btn-sm">Facebook</button>
                            <button class=" mr-2 btn btn-default btn-sm">Email</button>
                            <span class="ml-3">
                                 <img src="/assets/images/dots3.svg" alt="">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from '../../layouts/Header'
    import Sidebar from '../../layouts/Sidebar'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            Header,
            Sidebar
        },
    }
</script>
