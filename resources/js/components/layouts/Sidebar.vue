<template>
    <aside class="main-sidebar sidebar-light-info">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <img src="/assets/images/Capijzo-Type.svg" alt="">
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <li class="nav-item has-treeview menu-open">
                        <a href="#" class="nav-link">
                            <p>
                                Categories
                                <i class="fas fa-angle-left right gray-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle text-danger"></i>
                                    <p class="ml-2">Prospecting</p>

                                    <!--                                    <span>-->
                                    <!--                                       <img src="/assets/images/dots3.svg" alt="">-->
                                    <!--                                    </span>-->

                                    <span class="dropdown">
                                   <span type="button" id="categoryActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu category-actions popup" aria-labelledby="categoryActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            Edit Category
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                            Share Category
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            Delete Category
                                        </a>
                                    </div>
                                 </span>
                                </a>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle text-success"></i>
                                    <p class="ml-2">Sales</p>
                                    <span>
                                       <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle text-warning"></i>
                                    <p class="ml-2">Marketing</p>
                                    <span>
                                       <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle"></i>
                                    <p class="ml-2">Procurement</p>
                                    <span>
                                       <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">
                                    <i class="fas fa-plus red-icon"></i>
                                    <p class="ml-2">Add Category</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <div class="dropdown-divider"></div>
                        </a>
                    </li>
                    <li class="nav-item has-treeview menu-open">
                        <a href="#" class="nav-link">
                            <p>
                                Labels
                                <i class="fas fa-angle-left right gray-icon"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item item-hover">
                                <span role="button">
                                    <img src="/assets/images/dots6.svg" alt="">
                                </span>
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Email</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" id="labelActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu label-actions popup" aria-labelledby="labelActions">
                                        <a class="dropdown-item" href="#"> <img class="mr-2"
                                                                                src="/assets/images/edit-icon.svg"
                                                                                alt=""> Edit Label</a>
                                        <a class="dropdown-item" href="#"> <img class="mr-2"
                                                                                src="/assets/images/share-icon.svg"
                                                                                alt=""> Share Label</a>
                                        <a class="dropdown-item" href="#"> <img class="mr-2"
                                                                                src="/assets/images/delete-icon.svg"
                                                                                alt=""> Delete Label</a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Linkedin</p>
                                </a>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Facebook</p>
                                </a>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Twitter</p>
                                </a>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">
                                    <i class="fas fa-plus red-icon"></i>
                                    <p class="ml-2">Add Label</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
