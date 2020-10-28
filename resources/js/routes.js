import VueRouter from 'vue-router';
import Dashboard from "./components/pages/dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

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
            path: '/dashboard',
            component: Dashboard
        }
    ],
    mode: 'history'
});

export default router;
