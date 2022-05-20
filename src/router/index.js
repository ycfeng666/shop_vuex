import { createRouter, createWebHashHistory } from 'vue-router';
import LRView from '../views/LRView.vue';
import SSView from '../views/SSView.vue';

const routes = [
	{
		path: '/',
		name: 'LR',
		component: LRView,
	},
	{
		path: '/ss',
		name: 'SS',
		component: SSView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
