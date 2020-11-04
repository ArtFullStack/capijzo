<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav d-none">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
        </ul>
        <form class="form-inline ml-5">
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-navbar search-btn" type="button">
                        <img src="/assets/images/Search_icon.svg" alt="" width="20">
                    </button>
                </div>
                <input class="form-control form-control-navbar" type="search" id="search-input"
                       placeholder="Search snippets, labels and categories" aria-label="Search">
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
                <div class="dropdown-menu dropdown-menu-right popup productivity-popup pt-0"
                     @click="(e) =>  e.stopPropagation()">
                    <div class="dropdown-content p-4">
                        <div class="productivity-popup-header d-flex justify-content-between">
                            <p class="productivity-popup-header-title">Your Productivity</p>
                            <p class="text-danger">Productivity Settings</p>
                        </div>
                        <div class="scores d-flex justify-content-between">
                            <div class="score">
                                <p class="score-label">Total hours saved</p>
                                <p class="score-value">23.4 Hours</p>
                            </div>
                            <div class="score">
                                <p class="score-label">Typing speed</p>
                                <p class="score-value">43 WPM</p>
                            </div>
                            <div class="score">
                                <p class="score-label">Inserted Words</p>
                                <p class="score-value">108.5 K</p>
                            </div>
                        </div>
                        <tabs
                            :tabs="tabs"
                            :currentTab="currentTab"
                            :wrapper-class="'default-tabs'"
                            :tab-class="'default-tabs__item'"
                            :tab-active-class="'default-tabs__item_active'"
                            :line-class="'default-tabs__active-line'"
                            @onClick="handleClick"
                        />

                        <div class="content">
                            <div v-if="currentTab === 'daily'">
                                <div class="daily-content d-flex justify-content-between">
                                    <div class="daily">
                                        <p class="score-label">Saved time</p>
                                        <p class="score-value">45 Minutes</p>
                                    </div>
                                    <div class="daily">
                                        <p class="score-label">Words per minute</p>
                                        <p class="score-value">42 WPM</p>
                                    </div>
                                    <div class="daily">
                                        <p class="score-label">Inserted words</p>
                                        <p class="score-value">108.5 K</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="currentTab === 'weekly'">
                                <div class="row">
                                    <div class="col">
                                        <div class="table-responsive">
                                            <table class="borderless table weekly-score mb-0">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Saved Time</th>
                                                    <th>Words Inserted</th>
                                                    <th>WPN</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="day in weekDays">
                                                    <td>{{day.day}}</td>
                                                    <td>{{day.saved_time}} Mins</td>
                                                    <td>{{day.word_inserted}} Words</td>
                                                    <td>{{day.wpm}}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <!-- Notifications Dropdown Menu -->
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="far fa-bell"></i>
                    <span class="badge badge-danger navbar-badge">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right popup notify-popup">
                    <div class="dropdown-content p-4 d-flex justify-content-center align-items-center">
                        <div class="no-notify text-center">
                            <img src="/assets/images/bell-group-icon.svg" alt="">
                            <h3>All Caught Up!</h3>
                            <p>You have no notifications</p>
                        </div>
                    </div>
                </div>
            </li>

            <li class="nav-item dropdown px-3 btn">
                <a class="align-items-center" role="button" data-toggle="dropdown">
                    <img
                        src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg"
                        class="rounded-circle" alt="User Image" width="42">
                    <span class="hidden-xs px-2 user-name">Ezzeldeen Ahmed</span>
                    <img src="/assets/images/Arrow_icon.svg" alt="">
                </a>
                <div class="dropdown-menu dropdown-menu-left dropdown-menu-lg popup">
                    <router-link to="/settings/my-account">
                        <a href="#" class="dropdown-item">
                            <img src="/assets/images/Setting_icon.svg" alt="">
                            <span class="ml-3">Settings</span>
                        </a>
                    </router-link>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Sync_icon.svg" alt="">
                        <span class="ml-3">Sync</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Activity_icon.svg" alt="">
                        <span class="ml-3">View Activity Log</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="dropdown-divider"></div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Premium_icon.svg" alt="">
                        <span class="ml-3 text-danger">Capijzo Premium</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Business_icon.svg" alt="">
                        <span class="ml-3">Capijzo Business</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="dropdown-divider"></div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Template_icon.svg" alt="">
                        <span class="ml-3">Template</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Blog_icon.svg" alt="">
                        <span class="ml-3">Blog</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/Support_icon.svg" alt="">
                        <span class="ml-3">Support</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="dropdown-divider"></div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <img src="/assets/images/logout-icon.svg" alt="">
                        <span class="ml-3">Log out</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="dropdown-divider"></div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <p>Download</p>
                        <span class="r-soon">Releasing soon</span>
                        <div class="app-icons d-flex justify-content-between mt-3">
                            <span>
                                <img src="/assets/images/Chrome.svg" alt="">
                            </span>
                            <span>
                                <img src="/assets/images/Firefox.svg" alt="">
                            </span>
                            <span>
                                <img src="/assets/images/Outlook.svg" alt="">
                            </span>
                            <span>
                                <img src="/assets/images/Android.svg" alt="">
                            </span>
                            <span>
                                <img src="/assets/images/Apple.svg" alt="">
                            </span>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="dropdown-divider"></div>
                    </a>
                    <a href="#" class="dropdown-item">
                        App Version 1.01
                    </a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Tabs from 'vue-tabs-with-active-line';

    export default {
        data() {
            return {
                tabs: [
                    {title: 'Daily', value: 'daily'},
                    {title: 'Weekly', value: 'weekly'},
                ],
                currentTab: 'daily',
                weekDays: [
                    {
                        day:  'Mon',
                        saved_time: 30,
                        word_inserted: 2534,
                        wpm: 42
                    },
                    {
                        day:  'Tue',
                        saved_time: 32,
                        word_inserted: 2734,
                        wpm: 41
                    },
                    {
                        day: 'Wed',
                        saved_time: 27,
                        word_inserted: 2345,
                        wpm: 42
                    },
                    {
                        day: 'Thu',
                        saved_time: 28,
                        word_inserted: 2387,
                        wpm: 42
                    },
                    {
                        day: 'Fri',
                        saved_time: 40,
                        word_inserted: 2967,
                        wpm: 41
                    },
                    {
                        day: 'Sat',
                        saved_time: 40,
                        word_inserted: 2967,
                        wpm: 41
                    },
                    {
                        day: 'Sun',
                        saved_time: '00',
                        word_inserted: '--',
                        wpm: '00'
                    }
                ]
            }
        },

        components: {
            Tabs,
        },

        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
            },
        },
    }
</script>

<style scoped>

</style>
