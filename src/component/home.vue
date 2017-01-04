<template>
	<div id="index">

		<div class="swiper-container">
		  <div class="swiper-wrapper">

		    <div class="swiper-slide">
		      <img class="imgload" src="http://img.iblimg.com/market-1/images/content/2016/10/287631970.jpg" alt="首页banner图片01">
		    </div>
		    <div class="swiper-slide">
		      <img class="imgload" src="http://img.iblimg.com/market-1/images/content/2016/10/287631970.jpg" alt="首页banner图片02">
		    </div>
		    <div class="swiper-slide">
		    	<img class="imgload" src="http://img.iblimg.com/market-1/images/content/2016/10/287631970.jpg" alt="首页banner图片03">
		    </div>
		  </div>
		  <!-- 如果需要分页器 -->
		  <div class="swiper-pagination"></div>

		</div>

		<h1>初始页</h1>
		<div><h2>id:  {{ $route.params.id }} </h2></div>
		<a><router-link to="/list/asdasdasd11111111111md5/more">点我跳转到子页</router-link></a>
		<router-view></router-view>
	</div>
</template>

<script>
 import Swiper from '../assets/scripts/swiper-3.4.1.min.js'

	export default {
		data () {
			return {
				
			}
		},
		mounted (){
		     var mySwiper = new Swiper('.swiper-container', {
		       direction: 'horizontal',
		       loop: true,
		       pagination: '.swiper-pagination',
		       autoplay: 5000
		       //nextButton: '.swiper-button-next',
		       //prevButton: '.swiper-button-prev'
		     })
		}
	}
</script>

<style>
@import "../assets/styles/swiper-3.4.1.min.css";
.swiper-container,.swiper-container img{
	width: 100%;
	height: auto;
}
.swiper-pagination-bullet-active{background:#fff}

</style>