import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from './doc'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:"/",component:Home},
        Doc
    ]
})