
import { createRouter, createWebHashHistory } from "vue-router"

import  HomeComponent   from './component/kanban.vue';
import  GanttComponent   from './component/gantt.vue';
import  AccordionComponent   from './component/accordion.vue';
import  AlertComponent   from './component/alert.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/gantt',
        name: 'Gantt',
        component: GanttComponent,
    },
    {
        path: '/accordion',
        name: 'Accordion',
        component: AccordionComponent,
    },
    {
        path: '/alert',
        name: 'Alert',
        component: AlertComponent,
    },
];
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router;