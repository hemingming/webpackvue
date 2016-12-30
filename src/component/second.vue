<template>
  <div id="second">
		<div class="loading" v-if="loading">
			Loading...
		</div>
  	<transition name="slide-left">
    <el-card class="box-card">
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
    </el-card>

    <a> {{ author }} </a>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
