<template>
	<v-container fluid>
	  <swiper
		:slidesPerView="'auto'"
		:spaceBetween="30"
		:modules="modules"
		class="mySwiper"
	  >
		<swiper-slide v-for="content in contents" :style="{backgroundSize:'cover',backgroundPosition:'center',backgroundImage:`url('` +  content +`')`}">
		</swiper-slide>
	  </swiper>
	</v-container>
  </template>
  <script>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
  
	// Import Swiper styles
	import 'swiper/css';
  
	import 'swiper/css/pagination';
  
  
	// import required modules
	import { Pagination } from 'swiper/modules';
  
	export default {
	  components: {
		Swiper,
		SwiperSlide,
	  },
	  props:{
		contents:{
			type: Array,
			required: true
		}
	  },
	  data(){
		return{
			defaultImg: 'https://cdn.discordapp.com/attachments/1137702625329029130/1137702868678365224/sa-mp-515_copy.jpg'
		}
	  },
	  setup() {
		return {
		  modules: [Pagination],
		};
	  },
	};
  </script>
  <style>
  .swiper-slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: fill;
  }
  .swiper-slide {
	width: 80%;
  }
  
  .swiper-slide:nth-child(2n) {
	width: 60%;
  }
  
  .swiper-slide:nth-child(3n) {
	width: 40%;
  }
  .swiper {
	width: 100%;
	height: 75vh;
  }
  
  .swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
  
	/* Center slide text vertically */
	display: flex;
	justify-content: center;
	align-items: center;
  }
  </style>
  