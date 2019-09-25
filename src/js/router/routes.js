import Login from '../../components/login'
import Registe from '../../components/registe'
import Base from '../../components/base'
import Home from '../../components/home'


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
]