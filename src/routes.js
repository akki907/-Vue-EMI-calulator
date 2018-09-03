import Start from './components/start.vue'
import List from './components/list.vue'


export const routes = [{
        path: '',
        component: Start,
        children: [{
                path: '',
                component: Start,
                name: 'Start'
            },
            {
                path: '/list',
                component: List,
                name: 'list'
            }
        ]
    }
]