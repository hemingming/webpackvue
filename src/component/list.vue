<template>
	<div id="second">
    <h1>列表页</h1>
    <div><h2>id:  {{ $route.params.id }} </h2></div>
    <a><router-link to="/list/asdasdasd11111111111md5/more">点我跳转到子页</router-link></a>
		<div class="loading" v-if="loading">
			Loading...
		</div>

		<div v-for="item in items" class="text item">
		{{item.title}}

    <img :src="item.pic_path">

		</div>
		
		<a> {{ author }} </a>

	</div>
</template>

<script>
export default {
  data() {
    return {
      author: "Ming",
      loading: false,
      items: [],
    }
  },
  mounted: function() {
  	this.loading = true;
    this.$http.jsonp('https://s.m.taobao.com/search', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      	this.loading = false;

        console.log(response.data.itemsArray);
        this.items = response.data.itemsArray;
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
   methods: {
   }
}



</script>

<style>
.item{height:200px;}
</style>
