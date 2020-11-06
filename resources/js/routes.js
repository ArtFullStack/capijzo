import VueRouter from 'vue-router';
import Dashboard from "./components/pages/dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import AddSnippet from "./components/pages/snippet/Add";
import EditSnippet from "./components/pages/snippet/Edit";
import ShareSnippet from "./components/pages/snippet/Share";
import DeleteSnippet from "./components/pages/snippet/Delete";
import AddCategory from "./components/pages/category/Add";
import EditCategory from "./components/pages/category/Edit";
import ShareCategory from "./components/pages/category/Share";
import DeleteCategory from "./components/pages/category/Delete";
import AddLabel from "./components/pages/label/Add";
import EditLabel from "./components/pages/label/Edit";
import ShareLabel from "./components/pages/label/Share";
import DeleteLabel from "./components/pages/label/Delete";
import MyAccount from "./components/pages/settings/MyAccounts";
import ChangePassword from "./components/pages/settings/ChangePassword";
import GeneralSettings from "./components/pages/settings/GeneralSettings";
import Subscription from "./components/pages/settings/Subscription";
import Notifications from "./components/pages/settings/Notifications";
import AppShortcuts from "./components/pages/settings/AppShortcuts";
import TeamMembers from "./components/pages/settings/TeamMembers";
import Reports from "./components/pages/settings/Reports";
import AccessControl from "./components/pages/settings/AccessControl";
import AccountBilling from "./components/pages/settings/AccountBilling";
import Invite from "./components/pages/settings/Invite";

const router = new VueRouter({

    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/forgot-password',
            component: ForgotPassword
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/add-snippet',
            component: AddSnippet
        },
        {
            path: '/edit-snippet',
            component: EditSnippet
        },
        {
            path: '/share-snippet',
            component: ShareSnippet
        },
        {
            path: '/delete-snippet',
            component: DeleteSnippet
        },
        {
            path: '/add-category',
            component: AddCategory
        },
        {
            path: '/edit-category',
            component: EditCategory
        },
        {
            path: '/share-category',
            component: ShareCategory
        },
        {
            path: '/delete-category',
            component: DeleteCategory
        },
        {
            path: '/add-label',
            component: AddLabel
        },
        {
            path: '/edit-label',
            component: EditLabel
        },
        {
            path: '/share-label',
            component: ShareLabel
        },
        {
            path: '/delete-label',
            component: DeleteLabel
        },
        {
            path: '/settings/my-account',
            component: MyAccount
        },
        {
            path: '/settings/change-password',
            component: ChangePassword
        },
        {
            path: '/settings/general-settings',
            component: GeneralSettings
        },
        {
            path: '/settings/subscription',
            component: Subscription
        },
        {
            path: '/settings/notifications',
            component: Notifications
        },
        {
            path: '/settings/app-shortcuts',
            component: AppShortcuts
        },
        {
            path: '/settings/team-members',
            component: TeamMembers
        },
        {
            path: '/settings/reports',
            component: Reports
        },
        {
            path: '/settings/access-control',
            component: AccessControl
        },
        {
            path: '/settings/account-billing',
            component: AccountBilling
        },
        {
            path: '/settings/invite',
            component: Invite
        },
    ],
    mode: 'history'
});

export default router;
