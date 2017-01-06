import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//const First = { template: '<div><h2>1  {{ $route.params.id }} </h2></div>' }

import home from './component/home.vue'
import list from './component/list.vue'
import mine from './component/mine.vue'
import header from './component/header.vue'

//const homes = resolve => require(['./component/home.vue'], resolve)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	waitForData: true,

	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/list',
			component: list
		},
		{
			path: '/list/:id',
			name: 'list',
			component: list,
			children : [{
				path: 'more',
          		component: list
			}]
		},
		{
			path: '/mine',
			component: mine
		}
	]
})

router.beforeEach((to, from, next) => {

  const toPath = to.path;
  const fromPath = from.path;
  next();
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