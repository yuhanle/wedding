<template>
	<div class="list">
		<swiper :options="swiperOption" >
			<swiper-slide v-for="(item, index) in imgArr" :key="swipeList"><img :src="item.src"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	const imgArr = [{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list0.jpg'
	},{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list1.jpg'
	},{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list2.jpg'
	},{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list3.jpg'
	},{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list4.jpg'
	},{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list5.jpg'
	},{
		src:'http://7xqhcq.com1.z0.glb.clouddn.com/wedding/img/list6.jpg'
	}];
	export default {
		name: 'swipeList',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 10,
				},
				imgArr: imgArr
			}
		}
  }
</script>

<style lang='scss'>
	.list {
		width: 100%;
		left: 0;
		top: 790px;
		height: 222px;
        margin-bottom: -16px;
		img {
	        height: 210px;
	        left: 0;
			width: 100%;
	    }
	}
</style>
