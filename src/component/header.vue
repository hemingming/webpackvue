<template>
	<div id="header">
		<header>
			logo
		</header>
	</div>
</template>

<script>


	export default {
		data () {
			return {
			}
		}
	}
</script>

<style>
header{height:1rem;width:100%;background:#ffc600;text-align:center;color:#fff;position:fixed;left:0;top:0;z-index:9;line-height:1rem;font-size:.4rem;}

.load1{position:fixed;width:3rem; height:1.5rem; left:50%;margin-left:-1.5rem;border-radius:.2rem;z-index:9;}

.load1 .loader:before,
.load1 .loader:after,
.load1 .loader {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load1 1.8s infinite ease-in-out;
  animation: load1 1.8s infinite ease-in-out;
}
.load1 .loader {
  margin: 0 auto;
  font-size: .1rem;
  position: relative;
  text-indent: -9999em;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  position:absolute;left:50%;top:0;margin-left:-0.5em;
}
.load1 .loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load1 .loader:after {
  left: 1.5em;
}
.load1 .loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #ffffff;
  }
  40% {
    box-shadow: 0 2.5em 0 0 #ffc600;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #ffffff;
  }
  40% {
    box-shadow: 0 2.5em 0 0 #ffc600;
  }
}


</style>