<template>
	<div class='content'>
		<div class='banner'>
			<h3 id='about'></h3>
			<img :src='src' />
		</div>
		<div>
			<div class='mar' v-for='item in docs'>
				<h3>{{item.h3}}</h3>
				<p class='word'>{{item.p1}}</p>
				<p class='word'>{{item.p2}}</p>
				<p class='word'>{{item.p3}}</p>
				<p class='word'>{{item.p4}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	const docs = [{
		h3: '相识-初校园',
		p1: '2010年，相识于炮院，那是洗礼于高考之后的首次邂逅，一切顺与自然',
		p2: '、',
		p3: '。',
		p4: ''
	},{
		h3: '相知-遇城市',
		p1: '从郑州到上海，暂时的分开只为更美好的团聚',
		p2: '，',
		p3: '，',
		p4: '。'
	},{
		h3: '相爱-迎未来',
		p1: '一起生活，一起玩',
		p2: '；',
		p3: '，',
		p4: '。'
	}];
	export default {
		name: 'aboutContent',
		data () {
			return {
				src: '/static/img/about.jpg',
				docs: docs
			}
		}
	}
</script>
<style lang='scss'>
	#about{
		text-align: left;
		position: absolute;
		top: 16%;
		left: 20%;
		z-index: 8;
		color: white;
		font-size: 34px;
        line-height: 130%;
        animation: fadeIn 2s 0.5s ease both;
	}
	.mar{
		margin: 50px 0 50px;
		h3 {
			font-size: 36px;
			padding: 42px 0 26px;
			font-weight: 500;
			color: #666;
		}
		p {
			line-height: 32px;
			font-size: 14px;
			color: #8d8d8d;
			text-align: center;
		}
	}
</style>
