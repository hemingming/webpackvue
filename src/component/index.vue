<template>
	<div id="index">
		<h1>title</h1>
		<a>{{ author }}</a>
		<div><h2>1  {{ $route.params.id }} </h2></div>
		<a><router-link to="/first/asdasdasd11111111111md5/more">点我跳转到子页</router-link></a>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				author: "微信"
			}
		}
	}
</script>

<style>

</style>