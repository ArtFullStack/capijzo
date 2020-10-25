import VueRouter from 'vue-router';
import Dashboard from "./components/pages/dashboard";

const router = new VueRouter({

    routes: [
        {
            path: '/',
            component: Dashboard,
            redirect: '/login'
        },
        {
            path: '/login',
            component: Dashboard
        },
        {
            path: '/register',
            component: Dashboard
        },
        {
            path: '/dashboard',
            component: Dashboard
        }
    ],
    mode: 'history'
});

export default router;
