<template>
	<div class='content'>
		<div class='banner'>
			<h1>我们从这里开始</h1>
			<h2>2017年10月10日</h2>
			<img :src='src' />
		</div>
		<div class='introduce'>
			<div class='text mar1'>
				<p>是该庆幸</p>
				<p>在我们逐步走入对方的生活中时</p>
				<p>那份静谧如此自然</p>
			</div>
			<div class='pic mar1'>
				<img :src='src2' />
				<div class='ad'>
					<h3>没有海誓山盟<br>幸福足够</h3>
					<p class='word'>如同太平盛世一叶飘舟，游际于岁月长河。</p>
					<p class='word'>于水乐，与舟乐，亦与大好河山乐。</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'bigEvent',
		data () {
			return {
				src: 'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/share1.jpg',
				src2: 'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/share2.jpg'
			}
		}
	}
</script>
<style lang='scss'>
	@mixin fade-in {
        -webkit-animation: fadeIn 2s 0.5s ease both;
        -moz-animation: fadeIn 2s 0.5s ease both;
        -ms-animation: fadeIn 2s 0.5s ease both;
        -o-animation: fadeIn 2s 0.5s ease both;
        animation: fadeIn 2s 0.5s ease both;
	}
	.content .banner h1{
		position: absolute;
		width: 100%;
		top: 160px;
		z-index: 8;
		color: white;
		font-size: 64px;
		@include fade-in;
	}
	.content .banner h2{
		position: absolute;
		width: 100%;
		top: 300px;
		z-index: 8;
		color: white;
		font-size: 36px;
		@include fade-in;
	}
	.introduce {
		position: relative;
		width: 100%;
		height: 100%;
		top: -10%;
		img {
			width: 400px;
			height: 400px;
		}
	}
	.pic{
		position: relative;
		img{
			left: -15%;
			position: relative;
		}
	}
	.ad{
		position: absolute;
		top: 10%;
		left: 55%;
        width: 336px;
		 h3 {
			text-align: left;
			font-size: 36px;
			color: #585858;
			font-weight: 500;
		}
	}
	.word{
		font-size: 14px;
		color: #4b4b4b;
		line-height: 22px;
		text-align: left;
		margin: 0;
		padding: 0;
        padding-bottom: 10px;
	}
	.mar1{
		margin: 50px 0 50px;
	}
</style>
