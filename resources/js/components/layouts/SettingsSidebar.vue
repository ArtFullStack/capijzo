<template>
    <div class="settings-sidebar">
        <router-link to="/settings/my-account">
            <p><img src="/assets/images/Account_icon.svg" alt="" width="20"> <span>My Account</span></p>
        </router-link>
        <router-link to="/settings/change-password">
            <p><img src="/assets/images/Password_icon.svg" alt="" width="20"> <span>Change Password</span></p>
        </router-link>
        <router-link to="/settings/general-settings">
            <p><img src="/assets/images/Setting_icon.svg" alt="" width="20"> <span>General Settings</span></p>
        </router-link>
        <router-link to="/settings/subscription">
            <p><img src="/assets/images/Subscription_icon.svg" alt="" width="20"> <span>Subscriptions</span></p>
        </router-link>
        <router-link to="/settings/notifications">
            <p><img src="/assets/images/bell-icon.svg" alt="" width="20"> <span>Notifications</span></p>
        </router-link>
        <router-link to="/settings/app-shortcuts">
            <p><img src="/assets/images/shortcuts_icon.svg" alt="" width="20"> <span>App Shortcuts</span></p>
        </router-link>
        <hr>
        <div class="business-title">
            <span>Business Account Settings</span>
        </div>
        <router-link to="/settings/team-members">
            <p @click="updateMenu($event)" data-url="/settings/team-members"><img src="/assets/images/Members_icon.svg" alt="" width="20"> <span>Team Members</span></p>
        </router-link>
        <router-link to="/settings/reports">
            <p><img src="/assets/images/Reports_icon.svg" alt="" width="20"> <span>Reports</span></p>
        </router-link>
        <router-link to="/settings/access-control">
            <p><img src="/assets/images/Access_Control_icon.svg" alt="" width="20"> <span>Access Control</span></p>
        </router-link>
        <router-link to="/settings/account-billing">
            <p><img src="/assets/images/Account-Billing_icon.svg" alt="" width="20"> <span>Account & Billing</span></p>
        </router-link>

    </div>
</template>

<script>
    export default {
        data (){
            return {

            }
        },

        methods : {
            updateMenu : function (event) {
                var str = event.target.toString();
                console.log(event.currentTarget.dataset.url);
                console.log(str.substr(str.lastIndexOf('/') + 1));
                this.activeTab = str.substr(str.lastIndexOf('/') + 1);
            }
        }
    }
</script>

