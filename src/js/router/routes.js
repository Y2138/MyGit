import Login from '../../components/login'
import Registe from '../../components/registe'
import Base from '../../components/base'
import Home from '../../components/home'
import Ajax from '../../components/ajax'


export default [
    { path: '/', redirect: '/base/home'},
    { path: '/base', component: Base,
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'registe',
                component: Registe
            },
            {
                path: 'home',
                component: Home,
                //name: 'home',
            }
        ]
    },
    {path: '/ajax', component: Ajax}
]