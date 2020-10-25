<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav d-none">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
        </ul>
        <form class="form-inline ml-3">
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search gray-icon"></i>
                    </button>
                </div>
                <input class="form-control form-control-navbar" type="search" id="search-input" placeholder="Search snippets, labels and categories" aria-label="Search">
            </div>
        </form>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <!-- Messages Dropdown Menu -->
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="far fa-clock"></i>
                    <span class="badge badge-danger navbar-badge">3</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     sdfds
                </div>
            </li>
            <!-- Notifications Dropdown Menu -->
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="far fa-bell"></i>
                    <span class="badge badge-danger navbar-badge">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span class="dropdown-item dropdown-header">15 Notifications</span>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-envelope mr-2"></i> 4 new messages
                        <span class="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-users mr-2"></i> 8 friend requests
                        <span class="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-file mr-2"></i> 3 new reports
                        <span class="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
            </li>

            <li class="nav-item dropdown px-3">
                <a class="align-items-center" role="button" data-toggle="dropdown">
                    <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" class="rounded-circle" alt="User Image" width="48">
                    <span class="hidden-xs px-2 user-name">Ezzeldeen Ahmed</span>
                    <img src="/assets/images/Arrow_icon.svg" alt="">
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-md">
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-cog mr-2"></i>
                        Settings
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-sync-alt mr-2"></i>
                        Sync
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-chart-line mr-2"></i>
                        View Activity Log
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="dropdown-divider"></div>
                    </a>

                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
