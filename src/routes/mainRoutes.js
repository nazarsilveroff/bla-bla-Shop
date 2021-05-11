import AdminPage from "../pages/AdminPage"
import AuthPage from "../pages/AuthPage"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"

const mainRoutes = [{
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage
},
{
    name: 'Products',
    path: '/Products',
    exact: true,
    component: ProductsPage
},
{
    name: 'Admin',
    path: '/Admin',
    exact: false,
    component: AdminPage
},
{
    name: 'Registation',
    path: '/Registation',
    exact: true,
    component: AuthPage
},
{
    name: 'Login',
    path: '/Login',
    exact: true,
    component: AuthPage
},
]

export default mainRoutes