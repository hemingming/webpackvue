<template>
	<div>
		<header>
			<a href="javascript:history.go(-1);" class="back"><i class="icon iconfont">&#xe621;</i></a>
			{{name}}
		</header>

		<ul class="login">
			<li><label>帐号：</label> <input type="text"></li>
			<li><label>密码：</label> <input type="password"></li>
			<button>登录</button>
		</ul>
	</div>
</template>

<script>
export default {
  data() {
    return {
      name: "login"

    }
  }
}

</script>

<style>
.login{width:90%;margin:0 auto;padding:.5rem 0;}
.login li{padding:.1rem;height:.6rem;}
.login label{width:15%;color:#666;float:left;height:.6rem;font-size:.28rem;line-height:.65rem;}
.login input{width:80%;float:right;border:1px solid #ddd;height:.6rem;padding:.01rem .05rem;}
.login button{width:100%;height:.72rem;background:#f55;color:#fff;border:none;border-radius:.05rem;margin:.5rem auto;font-size:.28rem;}
.login button:active{background:#f44;}
</style>
