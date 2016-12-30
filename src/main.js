import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);


//const First = { template: '<div><h2>1  {{ $route.params.id }} </h2></div>' }
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


const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')





/*
new Vue({
  el: '#app',
  render: h => h(App)
})
*/