import Login from '../../components/login'
import Registe from '../../components/registe'
import Base from '../../components/base'


export default [
    { path: '/', component: Base },
    { path: '/base', component: Base,
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'registe',
                component: Registe
            }
        ]},
    { path: '/login', component: Login },
    { path: '/registe', component: Registe },
]