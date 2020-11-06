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
                            <h2 class="settings-content-title">Team Members</h2>
                            <div class="container-fluid p-0 mt-4 members-page">
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="row members-top pl-1 mt-3 mb-4">
                                            <div class="d-flex align-items-center">
                                                <router-link to="/settings/invite">
                                                    <button class="btn btn-default invite-user-button">Invite Users
                                                    </button>
                                                </router-link>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src="/assets/images/Account_icon.svg" width="20">
                                                    <span>5 Active Users</span>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src="/assets/images/Invitation_icon.svg" width="20">
                                                    <span>3 Invitation Sent</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="table-responsive">
                                                    <table class="table members-table">
                                                        <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Last Active</th>
                                                            <th>Type</th>
                                                            <th></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="member in members">
                                                            <td>{{member.name}}</td>
                                                            <td>{{member.email}}</td>
                                                            <td>{{member.last_active}}</td>
                                                            <td>{{member.type}}</td>
                                                            <td>
                                                                <div class="member-action-buttons">
                                                                    <div v-if="member.type === 'Invite'"
                                                                         class="member-delete-button">
                                                                        <img src="/assets/images/close_icon.svg"
                                                                             width="20">
                                                                    </div>
                                                                    <div v-else class="btn-group dropleft">
                                                                           <span type="button dropleft"
                                                                                 class="memberActions"
                                                                                 data-toggle="dropdown"
                                                                                 aria-haspopup="true"
                                                                                 aria-expanded="false">
                                                                                <img src="/assets/images/dots3.svg"
                                                                                     alt="">
                                                                            </span>
                                                                        <div class="dropdown-menu member-actions popup"
                                                                             aria-labelledby="memberActions">
                                                                            <a class="dropdown-item" href="#">
                                                                                <router-link to="#">
                                                                                    Change User Role
                                                                                </router-link>
                                                                            </a>
                                                                            <a class="dropdown-item" href="#">
                                                                                <router-link to="#">
                                                                                    Deactivate user
                                                                                </router-link>
                                                                            </a>
                                                                            <a class="dropdown-item" href="#">
                                                                                <router-link to="#">
                                                                                    Remove user
                                                                                </router-link>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
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
</template>

<script>
    import SettingsHeader from '../../layouts/SettingsHeader'
    import SettingsSidebar from '../../layouts/SettingsSidebar'

    export default {
        data() {
            return {
                members: [
                    {
                        name: 'Bianca Pierce',
                        email: 'carolyn.rivera@mail.com',
                        last_active: '12/26/2020 - 10:49 AM',
                        type: 'Administrator'
                    },
                    {
                        name: 'Diana Barnett',
                        email: 'philip.roberts@mail.com',
                        last_active: '12/26/2020 - 10:49 AM',
                        type: 'Manager'
                    },
                    {
                        name: 'Jerry Watkins',
                        email: 'george.ortiz@mail.com',
                        last_active: '12/26/2020 - 10:49 AM',
                        type: 'Invite'
                    }
                ]
            }
        },
        components: {
            SettingsHeader,
            SettingsSidebar
        }
    }
</script>

<style scoped>

</style>
