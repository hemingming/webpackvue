<template>
	<div id="home" @touchmove="scroll" @mousewheel="scroll" @scroll="scroll">
		<header>{{name}}</header>

		<!--swiper-->
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
		<!--swiper eof-->

		<div class="load-container load1"  v-if="loading">
			<div class="loader">Loading...</div>
		</div>

		<section class="items clearfix" >
			<div class="product"  v-for="item in items">
				<div class="pic"><img :src="item.pic_path"></div>
				<span class="name">{{item.title}}</span>
				<span class="price">&yen; {{item.price}}</span>
			</div>

		</section>


		<router-view></router-view>
	</div>
</template>

<script>
	import Swiper from '../assets/scripts/swiper-3.4.1.min.js'
	var scrollDisable = false;

	export default {
		data () {
			return {
				name: 'logo',
				loading: false,
				items: []
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
		     });
		},
	    created: function() {
	        this.loadMore();
	    },
	    watch: {
	        '$route': 'loadMore'
	    },
		methods: {
			loadMore : function(){
					this.loading = true;
					scrollDisable = true;
					let timer = null;
					clearTimeout(timer);
					timer = setTimeout(function () {
						let newAry = [];

						this.$http.jsonp('https://s.m.taobao.com/search', {}, {
						    headers: {},
						    emulateJSON: true
						}).then(function(response) {
							let len = response.data.itemsArray.length;
						    
						    for(let i =0; i<len;i+=1){
						    	response.data.itemsArray[i].pic_path = response.data.itemsArray[i].pic_path.split('_60x60.jpg')[0];
						    	
						    }

						    for(let j = 0; j < len; j++) {
						      newAry.push(response.data.itemsArray[j]);
						    }
						    //this.items.push(response.data.itemsArray);
						    this.items = [...this.items, ...newAry];

						    console.log(this.items);

						    scrollDisable = false;
						    this.loading = false;
						}, function(response) {
						    console.log('async error'+ response)
						});

						
					}.bind(this), 500);

			},
			scroll : function(el){
				if(document.body.scrollTop + window.innerHeight >= this.$el.clientHeight / 1.5) {
					if (!scrollDisable){
						this.loadMore();
					}
					
				}
			}
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

#home{position:relative;}
.items{padding:0; background:#eee;display:block;clear:both;}
.product{width:49.8%;float:left;background:#fff;padding:2%;box-sizing:border-box;margin:0.01rem 0.01rem 0.01rem;}
.product:nth-child(2n){float:right;margin:0.01rem 0rem 0.01rem 0;}
.product img{width:100%;}
.product span{overflow:hidden;display:block;padding:.1rem 0;}
.product .name{color:#333;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:3rem;}
.product .price{color:#fe5400;}
.pic{width:90%;margin:5% auto;}


</style>