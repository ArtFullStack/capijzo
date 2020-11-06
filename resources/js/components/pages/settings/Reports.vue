<template>
    <div class="settings-page pb-5">
        <div class="settings-page-header">
            <SettingsHeader/>
        </div>
        <div class="settings-container">
            <div class="settings-main pt-5">
                <div class="row">
                    <div class="col-md-3">
                        <SettingsSidebar/>
                    </div>
                    <div class="col-md-9">
                        <div class="settings-content">
                            <h2 class="settings-content-title">Reports</h2>
                            <div class="container-fluid p-0 mt-4 reports-page">
                                <div class="row">
                                    <div class="col-md-10">
                                        <tabs
                                            :tabs="tabs"
                                            :currentTab="currentTab"
                                            :wrapper-class="'default-tabs'"
                                            :tab-class="'default-tabs__item'"
                                            :tab-active-class="'default-tabs__item_active'"
                                            :line-class="'default-tabs__active-line'"
                                            @onClick="handleClick"
                                        />

                                        <div class="content pt-4">
                                            <div v-if="currentTab === 'team-report'">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="reports-page-title m-0 mt-3 mb-4">All Time</p>
                                                        <div class="report-boxes">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Total hours saved</p>
                                                                        <h5>9.6 K Hours</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Average WPM</p>
                                                                        <h5>43 WPM</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Inserted Words</p>
                                                                        <h5>25.45 M</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-10">

                                                    </div>
                                                </div>
                                                <!--Start line-->
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="line-account py-4">
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--End line-->
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="reports-page-title m-0 mb-4">Daily</p>
                                                        <div class="report-boxes">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Hours saved</p>
                                                                        <h5>4.1 Hours</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Average WPM</p>
                                                                        <h5>43 WPM</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Inserted Words</p>
                                                                        <h5>10.5 K</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-10">

                                                    </div>
                                                </div>
                                                <!--Start line-->
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <div class="line-account py-4">
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--End line-->
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="table-responsive">
                                                            <p class="reports-page-title m-0 mb-4">Weekly</p>
                                                            <table class="table weekly-score mb-0">
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
                                            <div v-if="currentTab === 'user-report'">
                                                <div class="row">
                                                    <div class="col-md-8 d-flex align-items-center">
                                                        <p class="reports-page-title active-user-report m-0">
                                                            <img src="/assets/images/dot-group.png" alt="">
                                                            <span class="ml-3">Jayvadan Bhojani</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group text-left mb-0">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Search User">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--Start line-->
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="line-account pb-4 pt-3">
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--End line-->
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="reports-page-title m-0 mb-4">All Time</p>
                                                        <div class="report-boxes">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Total hours saved</p>
                                                                        <h5>9.6 K Hours</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Average WPM</p>
                                                                        <h5>43 WPM</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Inserted Words</p>
                                                                        <h5>25.45 M</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-10">

                                                    </div>
                                                </div>
                                                <!--Start line-->
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="line-account py-4">
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--End line-->
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p class="reports-page-title m-0 mb-4">Daily</p>
                                                        <div class="report-boxes">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Hours saved</p>
                                                                        <h5>4.1 Hours</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Average WPM</p>
                                                                        <h5>43 WPM</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="report-box-item">
                                                                        <p>Inserted Words</p>
                                                                        <h5>10.5 K</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-10">

                                                    </div>
                                                </div>
                                                <!--Start line-->
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <div class="line-account py-4">
                                                            <hr>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--End line-->
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="table-responsive">
                                                            <p class="reports-page-title m-0 mb-4">Weekly</p>
                                                            <table class="table weekly-score mb-0">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SettingsHeader from '../../layouts/SettingsHeader'
    import SettingsSidebar from '../../layouts/SettingsSidebar'
    import Tabs from 'vue-tabs-with-active-line';


    export default {
        data() {
            return {
                tabs: [
                    {title: 'Team Report', value: 'team-report'},
                    {title: 'User Report', value: 'user-report'},
                ],
                currentTab: 'team-report',
                weekDays: [
                    {
                        day: 'Mon',
                        saved_time: 30,
                        word_inserted: 2534,
                        wpm: 42
                    },
                    {
                        day: 'Tue',
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
        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
            },
        },
        components: {
            SettingsHeader,
            SettingsSidebar,
            Tabs
        }
    }
</script>

<style scoped>

</style>
