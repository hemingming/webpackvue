import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }

import second from './component/second.vue'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/first',
			component: First
		},
		{
			path: '/second',
			component: second
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