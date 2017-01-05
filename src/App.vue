<template>
    <div id="app">
        <footer class="app-tabs">
            <div class="button" >
                <router-link to="/home">
                    <i class="icon iconfont">&#xe681;</i>
                    <div class="tab-text">首页</div>
                </router-link>
            </div>
            <div class="button">
                <router-link to="/list">
                    <i class="icon iconfont">&#xe680;</i>
                    <div class="tab-text">列表</div>
                </router-link>
            </div>
            <div class="button">
                <router-link to="/mine">
                  <i class="icon iconfont">&#xe606;</i>
                  <div class="tab-text">帐户</div>
                </router-link>
            </div>
        </footer>

        <router-view class="view"></router-view>
    </div>
</template>


<script>

import home from './component/home.vue'

export default {
  data () {
    return {

    }
  },
  components: { 
    home
  }
  
}
</script>

<style>
@import "./assets/styles/base.css";
@import "./assets/styles/iconfont/iconfont.css";

#app{margin:1rem 0;}
footer{background:#fff;z-index:9;}
.app-tabs {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1rem;
    box-shadow: 0 0 10px 0 rgba(155, 143, 143, 0.6)
}


.app-tabs .button {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center
}

.app-tabs .button a {
    display: block;
    font-size: 0;
    line-height: 1;
}

.app-tabs .button i {
    font-size: .6rem;
    line-height: 1;
    color: #555
}

.app-tabs .button .tab-text {
    font-size: .2rem;
    color: #333;
    line-height: 1
}

.app-tabs .button .router-link-active i,
.app-tabs .button .router-link-active .tab-text {
    color: #f55
}


</style>
