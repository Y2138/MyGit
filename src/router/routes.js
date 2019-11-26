import Profile from '../components/profile'
import Base from '../components/base'
import Home from '../components/home'
import Ajax from '../components/ajax'


export default [
    { path: '/', redirect: '/base/home'},
    { path: '/base', component: Base,
        children: [
            {
                path: 'profile',
                component: Profile
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