<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
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
                                <div class="dropdown-menu filter-snippets"
                                     aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Top Snippets</a>
                                    <a class="dropdown-item" href="#">New Snippets</a>
                                </div>
                                <router-link to="/add-snippet">
                                    <button class="btn btn-default add_snippet ml-3">
                                        <img src="/assets/images/plus-image.svg" alt=""> Add Snippet
                                    </button>
                                </router-link>
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
                <div class="row snippet-item pt-2 pb-3">
                    <div class="col-md-4 d-flex align-items-center">
                        <p>
                            <i class="fas fa-circle text-danger"></i>
                            <span class="ml-2">Prospecting email script</span>
                        </p>
                    </div>
                    <div class="col-md-4 d-flex align-items-center">
                        <p><span>email prospecting </span></p>
                    </div>
                    <div class="col-md-4 d-flex justify-content-end align-items-center snippetActions">
                                <span class="dropdown">
                                    <button id="moreCategory" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" class="mr-2 btn btn-default btn-sm">+3 more</button>
                                    <div class="dropdown-menu more-category popup" aria-labelledby="moreCategory">
                                        <div class="dropdown-item" href="#">
                                            <button class="btn btn-default btn-sm">Linkedin</button>
                                            <button class="btn btn-default btn-sm">Facebook</button>
                                            <button class="btn btn-default btn-sm">Twitter</button>
                                        </div>
                                    </div>
                                 </span>

                        <button class="mr-2 btn btn-default btn-sm">Linkedin</button>
                        <button class="mr-2 btn btn-default btn-sm">Facebook</button>
                        <button class="mr-2 btn btn-default btn-sm">Email</button>
                        <div class="btn-group dropleft ml-3">
                           <span type="button dropleft" class="snippetActions"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="/assets/images/dots3.svg" alt="">
                            </span>
                            <div class="dropdown-menu snippet-actions popup" aria-labelledby="snippetActions">
                                    <router-link to="/edit-snippet">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                        Edit Snippet
                                        </a>
                                    </router-link>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/duplicate-icon.svg">
                                     <router-link to="/edit-snippet">
                                         Duplicate Snippet
                                     </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/edit-icon-2.svg">
                                    <router-link to="/edit-snippet">
                                        Edit Category
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/label_icon.svg">
                                    <router-link to="/edit-snippet">
                                        Edit Label
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/share-icon.svg">
                                    <router-link to="/share-snippet">
                                        Share Snippet
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/delete-icon.svg">
                                    <router-link to="/delete-snippet">
                                        Delete Snippet
                                    </router-link>
                                </a>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="row snippet-item  py-3">
                    <div class="col-md-4">
                        <p><i class="fas fa-circle text-warning"></i> <span class="ml-2">Client connection request - linked in</span>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <p><span>client connection</span></p>
                    </div>
                    <div class="col-md-4 d-flex justify-content-end align-items-center snippetActions">
                        <button class=" mr-2 btn btn-default btn-sm">Facebook</button>
                        <button class=" mr-2 btn btn-default btn-sm">Email</button>
                        <div class="btn-group dropleft ml-3">
                           <span type="button dropleft" class="snippetActions"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="/assets/images/dots3.svg" alt="">
                            </span>
                            <div class="dropdown-menu snippet-actions popup" aria-labelledby="snippetActions">
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/edit-icon.svg">
                                    <router-link to="/edit-snippet">
                                        Edit Snippet
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/duplicate-icon.svg">
                                    <router-link to="/edit-snippet">
                                        Duplicate Snippet
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/edit-icon-2.svg">
                                    <router-link to="/edit-snippet">
                                        Edit Category
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/label_icon.svg">
                                    <router-link to="/edit-snippet">
                                        Edit Label
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/share-icon.svg">
                                    <router-link to="/share-snippet">
                                        Share Snippet
                                    </router-link>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <img class="mr-2" src="/assets/images/delete-icon.svg">
                                    <router-link to="/delete-snippet">
                                        Delete Snippet
                                    </router-link>
                                </a>
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

</style>
