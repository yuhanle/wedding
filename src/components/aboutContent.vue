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
		h3: '相识-遇校园',
		p1: '七年前，相识于炮院，一切顺与自然',
		p2: '谁曾想',
		p3: '已缘定终身',
		p4: '此后之岁月，需携手游世间'
	},{
		h3: '相知-渡城市',
		p1: '从郑州到上海，几度分离几度圆',
		p2: '其中均衡',
		p3: '不过于他日长路漫漫',
		p4: '再回乡里，人甚言'
	},{
		h3: '相爱-迎未来',
		p1: '携手之时日，尚未可期',
		p2: '但谨记',
		p3: '你我均识庭前木',
		p4: '翘首不弃身下泥'
	}];
	export default {
		name: 'aboutContent',
		data () {
			return {
				src: 'https://cdn.yuhanle.com//wedding/img/about.jpg',
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
