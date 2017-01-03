import First from './component/index.vue'
import second2 from './component/second.vue'

const Seconds = resolve => require(['./component/second.vue'], resolve)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/first/:id',
			name: 'first',
			component: First,
			children : [{
				path: 'more',
          		component: second2
			}]
		},
		{
			path: '/second',
			component: Seconds
		}
	]
})