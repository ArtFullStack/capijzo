<template>
    <aside class="main-sidebar sidebar-light-info">
        <!-- Brand Logo -->
        <router-link to="/dashboard" class="brand-link">
            <img src="/assets/images/Capijzo-Type.svg" alt="" width="140">
        </router-link>

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
                                <i class="right">
                                    <img src="/assets/images/arrow-down.svg" alt="">
                                </i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle text-danger"></i>
                                    <p class="ml-2">Prospecting</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="categoryActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu category-actions popup" aria-labelledby="categoryActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-category">
                                                Edit Category
                                            </router-link>
                                        </a>
                                          <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-category">
                                                Share Category
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-category">
                                                Delete Category
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle text-success"></i>
                                    <p class="ml-2">Sales</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="categoryActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu category-actions popup" aria-labelledby="categoryActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-category">
                                                Edit Category
                                            </router-link>
                                        </a>
                                         <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-category">
                                                Share Category
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-category">
                                                Delete Category
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle text-warning"></i>
                                    <p class="ml-2">Marketing</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="categoryActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu category-actions popup" aria-labelledby="categoryActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-category">
                                                Edit Category
                                            </router-link>
                                        </a>
                                          <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-category">
                                                Share Category
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-category">
                                                Delete Category
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                <a class="nav-link">
                                    <i class="fas fa-circle"></i>
                                    <p class="ml-2">Procurement</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="categoryActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu category-actions popup" aria-labelledby="categoryActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-category">
                                                Edit Category
                                            </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-category">
                                                Share Category
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-category">
                                                Delete Category
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">
                                    <router-link to="/add-category">
                                        <i class="fas fa-plus red-icon"></i>
                                        <p class="ml-2">Add Category</p>
                                    </router-link>
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
                                <i class="right">
                                    <img src="/assets/images/arrow-down.svg" alt="">
                                </i>
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
                                   <span type="button" class="labelActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu label-actions popup" aria-labelledby="labelActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-label">
                                                Edit Label
                                            </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-label">
                                                Share Label
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-label">
                                                Delete Label
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                 <span role="button">
                                    <img src="/assets/images/dots6.svg" alt="">
                                </span>
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Linkedin</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="labelActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu label-actions popup" aria-labelledby="labelActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-label">
                                                Edit Label
                                            </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-label">
                                                Share Label
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-label">
                                                Delete Label
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                 <span role="button">
                                    <img src="/assets/images/dots6.svg" alt="">
                                </span>
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Facebook</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="labelActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu label-actions popup" aria-labelledby="labelActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-label">
                                                Edit Label
                                            </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-label">
                                                Share Label
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-label">
                                                Delete Label
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item item-hover">
                                <span role="button">
                                    <img src="/assets/images/dots6.svg" alt="">
                                </span>
                                <a class="nav-link">
                                    <img src="/assets/images/label_icon.svg" alt="">
                                    <p class="ml-2">Twitter</p>
                                </a>
                                <span class="dropdown">
                                   <span type="button" class="labelActions"
                                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/images/dots3.svg" alt="">
                                    </span>
                                    <div class="dropdown-menu label-actions popup" aria-labelledby="labelActions">
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/edit-icon.svg">
                                            <router-link to="/edit-label">
                                                Edit Label
                                            </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/share-icon.svg">
                                             <router-link to="/share-label">
                                                Share Label
                                             </router-link>
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img class="mr-2" src="/assets/images/delete-icon.svg">
                                            <router-link to="/delete-label">
                                                Delete Label
                                            </router-link>
                                        </a>
                                    </div>
                                 </span>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">

                                    <router-link to="/add-label">
                                        <i class="fas fa-plus red-icon"></i>
                                        <p class="ml-2">Add Label</p>
                                    </router-link>
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

