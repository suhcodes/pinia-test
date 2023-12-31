import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import('../views/Dashboard.vue')
const Profile = () => import('../views/Profile.vue')

const routes = [
	{
		path: '/',
		name: 'dashboard',
		component: Dashboard,
		meta: {
			title: 'Dashboard',
		},
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile,
		meta: {
			title: 'Profile',
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	const title = to.meta.title
	if (title) {
		document.title = `${title} | Vue + Pinia`
	}
	next()
})

export default router
