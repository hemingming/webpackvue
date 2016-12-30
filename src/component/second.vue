<template>
	<div id="second">
		<div class="loading" v-if="loading">
			Loading...
		</div>

		<div v-for="article in articles" class="text item">
		{{article.title}}
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
      articles: [],
    }
  },
  mounted: function() {
  	this.loading = true;
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      	this.loading = false;
        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>

<style>

</style>
