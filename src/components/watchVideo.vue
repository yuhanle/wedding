<template>
	<div class='content'>
		<div class='banner'>
            <h3 id='bigH3'>我们已安然度过七年<br>改变不断<br>追忆漫漫无边</h3>
			<img :src='src' />
		</div>
		<d-player :video="video"
	              :autoplay="autoplay"
	              @play="play"
	              ref="player">
	    </d-player>
		<div class='introduce'>
			<div class='pic mar1'>
				<img :src='src2' />
				<div class='ad'>
					<h3>终于等到你<br>在2017年的这一天</h3>
					<p class='word'>今夕何夕，空气里都充满了醉人的甜蜜。</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VueDPlayer from 'vue-dplayer'

	export default {
		name: 'watchVideo',
		data () {
			return {
				src: 'https://cdn.yuhanle.com//wedding/img/bigevent.jpg',
				src2: 'https://cdn.yuhanle.com//wedding/img/share3.jpg',
				video: {
		          url: 'https://cdn.yuhanle.com//wedding/wedding.mp4',
		          pic: 'https://cdn.yuhanle.com//wedding/img/poster.jpg'
		        },
				autoplay: false
			}
		},
		methods: {
	      play() {
	        console.log('play callback')
	      }
	    },
		components: {
		    'd-player': VueDPlayer
	    }
	}
</script>

<style lang='scss'>
    @mixin fade-in {
        @-webkit-keyframes fadeIn{
            0%{opacity:0}
            100%{opacity:1}
        }
        @-moz-keyframes fadeIn{
            0%{opacity:0}
            100%{opacity:1}
        }
        @-ms-keyframes fadeIn{
            0%{opacity:0}
            100%{opacity:1}
        }
        @-o-keyframes fadeIn{
            0%{opacity:0}
            100%{opacity:1}
        }
        @keyframes fadeIn{
            0%{opacity:0}
            100%{opacity:1}
        }
    }
	#bigH3{
        @include fade-in;
        line-height: 86px;
        top: 100px;
		left: 80px;
        font-size: 36px;
        display: table-cell;
        animation: fadeIn 2s 0.5s ease both;
        position: absolute;
        font-weight: bold;
        z-index: 8;
        color: #ffffff;
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
	.dplayer {
	    width: 800px;
	    margin: 30px auto;
	}
</style>
