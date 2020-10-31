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
        }
    ],
    mode: 'history'
});

export default router;
