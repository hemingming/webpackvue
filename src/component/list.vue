<template>
    <div>
    <!--
      <div><h2>id:  {{ $route.params.id }} </h2></div>
      <router-link to="/list/asdasdasd11111111111md5/more">点我跳转到子页</router-link>
		-->
    <header>
        <a href="javascript:history.go(-1);" class="back"><i class="icon iconfont">&#xe621;</i></a>
        {{name}}
    </header>
    <div class="load-container load7"  v-if="loading">
      <div class="loader">Loading...</div>
    </div>

    <section class="items clearfix">
      <div class="product"  v-for="item in items">
        <div class="pic"><img :src="item.pic_path"></div>
        <span class="name">{{item.title}}</span>
        <span class="price">&yen; {{item.price}}</span>
      </div>
    </section>

    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "list",
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
        //结果回调 处理淘宝图片
        for(let i =0; i<response.data.itemsArray.length;i+=1){
          response.data.itemsArray[i].pic_path = response.data.itemsArray[i].pic_path.split('_60x60.jpg')[0];
          
        }
        this.items = response.data.itemsArray;
        let that = this;
        setTimeout(function(){
          that.loading = false;
        },500)
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

.back{width:1rem;height:1rem;color:#fff;position:absolute;left:0;top:0;}
.back i{font-size:.35rem;}
</style>
