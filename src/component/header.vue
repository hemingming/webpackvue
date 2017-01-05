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

.load7 .loader:before,
.load7 .loader:after,
.load7 .loader {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.load7 .loader {
  margin: .5em auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  position:absolute;left:50%;top:2rem;margin-left:-0.5em;
}
.load7 .loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load7 .loader:after {
  left: 1.5em;
}
.load7 .loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em #ffffff;
  }
  40% {
    box-shadow: 0 2.5em 0 0 #ffc600;
  }
}
@keyframes load7 {
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