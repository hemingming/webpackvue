<template>

  <div id="app">
      <img src="./assets/logo.png">
      <footer class="ion-tabs tabs-light">
        <div class="ion-tab" >
          <router-link to="/">
              <i class=""></i>
              <div class="tab-tro">首页</div>
          </router-link>
        </div>
        <div class="ion-tab">
            <router-link to="/first/asdasdasd11111111111md5">
                <i class=""></i>
                <div class="tab-tro">列表</div>
            </router-link>
        </div>
        <div class="ion-tab">
            <router-link to="/second">
              <i class=""></i>
              <div class="tab-tro">帐户</div>
            </router-link>
        </div>
      </footer>

      <router-view class="view"></router-view>
  </div>
</template>


<script>
import index from './component/index.vue'
import second from './component/second.vue'

export default {
  data () {
    return {
      msg: 'Fuck Vue!'
    }
  },
  components: { index, second}
}
</script>

<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p,dl, dt, dd, ol, ul, li, fieldset, form, label, table, tbody, tfoot, thead, tr, th, td, article, aside, footer, header, nav, section{
margin:0;padding:0;outline:0 none;}
html{-webkit-text-size-adjust:none;}
body{font-size:0.16rem;font-family:Arial,'Microsoft YaHei';}
a,button,input,div{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent; /* For some Androids */
}
a,a:visited{color:#333;text-decoration:none}
img{-webkit-box-sizing: border-box;box-sizing: border-box;vertical-align: middle;border:0;}
input,textarea{-webkit-user-select:text;-ms-user-select:text;user-select:text;-webkit-appearance:none;}
input:focus,select:focus,textarea:focus,button:focus{outline:none;}
input[type="text"],input[type="password"],input[type="search"],input[type="tel"],input[type="number"],input[type="email"],input[type="url"],textarea{
 -webkit-appearance:none;}
input[type="number"]::-webkit-inner-spin-button{-webkit-appearance:none;}
a{text-decoration:none;-webkit-touch-callout:none;/*禁用默认触发*/}em,i{font-style:normal;}
li{list-style:none;}
input::-webkit-input-placeholder{color:#ccc;}  /*文字提示颜色*/
input:focus::-webkit-input-placeholder{color:#ccc;}
.clearfix:after {content:"."; display:block; height:0; clear:both; visibility:hidden}
.clearfix{*zoom:1}

.ion-tabs {
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
    align-items: center
}

.ion-tabs-up {
    width: 100%;
    height: 2.5rem
}

.ion-tabs {
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1rem;
    box-shadow: 0 0 10px 0 rgba(155, 143, 143, 0.6)
}


.ion-tabs .ion-tab {
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

.ion-tabs .ion-tab a {
    display: block;
    font-size: 0;
    line-height: 1;
}

.ion-tabs .ion-tab i {
    font-size: 1.25rem;
    line-height: 1;
    color: #555555
}

.ion-tabs .ion-tab .tab-tro {
    font-size: .4rem;
    color: #333333;
    line-height: 1
}

.ion-tabs .ion-tab.active i,
.ion-tabs .ion-tab.active .tab-tro {
    color: #e6133c
}


</style>
