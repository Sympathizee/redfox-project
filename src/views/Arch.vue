<template>
  <v-container class="ml-10" fluid>
    <v-row no-gutters class="main-box" v-for="content in contents" :style="content.style" data-aos="fade-up" data-aos-duration="1500">
      <v-col cols="3" class="left-box">
        <v-row no-gutters class="text-content position-relative h-100">
          <v-col cols="12" class="px-3 pt-3 pb-0 text-right">
            <div class="text-name">
              {{ content.builder }}
            </div>
            <div>
              {{ content.address }}
            </div>
            <div>
              <v-chip v-for="concept in content.concept" size="small" class="text-name ml-2" variant="outlined">{{ concept }}</v-chip>
            </div>
          </v-col>
          <v-col class="position-absolute" cols="2" style="height: 5rem;bottom: 0; left: 0; border-left: 1px solid white;">
          </v-col>
          <v-col cols="12" class="pl-3 position-absolute" style="bottom: 0; right: 0;">
            {{ content.date }}
          </v-col>
          <v-col cols="auto" class="pr-3 position-absolute text-right icon-discord">
            <i class="fa-brands fa-discord" @click="openDiscord"></i>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="right-box">
        <carousel :contents="content.images"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  // Import Swiper Vue.js components
  import Carousel from '@/components/Carousel.vue';

  var contents = [
    {
      builder: 'Santiago Guerreira',
      address: '202nd Mint Street',
      concept: ['Modern'],
      images: [
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870119745134672/samp_15_08_2023_11_36_49.png', 
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870120097468548/samp_15_08_2023_11_36_59.png', 
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870120625946684/samp_15_08_2023_11_37_20.png', 
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870121091518545/samp_15_08_2023_11_37_31.png', 
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870121540304917/samp_15_08_2023_11_37_57.png', 
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870121884241951/samp_15_08_2023_11_38_17.png',
        'https://cdn.discordapp.com/attachments/1140870119099219999/1140870122236559390/samp_15_08_2023_11_38_56.png'
      ],
      date: 'August, 15th 2023',
      style: {},
    },
    {
      builder: 'Santiago Guerreira',
      address: 'Argyle Rd. Fort Carson',
      concept: ['Modern', 'Minimalist'],
      images: [
        'https://cdn.discordapp.com/attachments/1139796608855314473/1139796609106980945/samp_12_08_2023_12_14_25.png', 
        'https://cdn.discordapp.com/attachments/1139796608855314473/1139796609388003358/samp_12_08_2023_12_14_34.png', 
        'https://cdn.discordapp.com/attachments/1139796608855314473/1139796609639649321/samp_12_08_2023_12_14_50.png', 
        'https://cdn.discordapp.com/attachments/1139796608855314473/1139796609891315793/samp_12_08_2023_12_15_05.png', 
        'https://cdn.discordapp.com/attachments/1139796608855314473/1139796609891315793/samp_12_08_2023_12_15_05.png', 
        'https://cdn.discordapp.com/attachments/1139796608855314473/1139796610235252856/samp_12_08_2023_12_15_22.png'
      ],
      date: 'August, 12th 2023',
      style: {},
    },
    {
      builder: 'Broghan Moura',
      address: 'San Luis Ave. Fort Carson',
      concept: ['Modern'],
      images: [
        'https://cdn.discordapp.com/attachments/1137702625329029130/1137702867650760704/sa-mp-518_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137702625329029130/1137702868011458620/sa-mp-513_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137702625329029130/1137702868380561428/sa-mp-514_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137702625329029130/1137702869194256474/sa-mp-516_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137702625329029130/1137702869550780426/sa-mp-517_copy.jpg'
      ],
      date: 'August, 6th 2023',
      style: {},
    },
    {
      builder: 'Broghan Moura',
      address: 'San Luis Ave. Fort Carson',
      concept: ['Modern'],
      images: [
        'https://cdn.discordapp.com/attachments/1137703910031753226/1137704148591181895/sa-mp-527_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137703910031753226/1137704148947718184/sa-mp-528_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137703910031753226/1137704149283241984/sa-mp-529_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137703910031753226/1137704149748830238/sa-mp-530_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137703910031753226/1137704150185017344/sa-mp-531_copy.jpg', 
        'https://cdn.discordapp.com/attachments/1137703910031753226/1137704150495399986/sa-mp-532_copy.jpg'
      ],
      date: 'August, 6th 2023',
      style: {borderBottom:'1px solid white'},
    },
  ]

  // function wheel(event) {
  //     var delta = 0;
  //     if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
  //     else if (event.detail) {(delta = -event.detail / 3);}

  //     handle(delta);
  //     // if (event.preventDefault) {(event.preventDefault());}
  //     // event.returnValue = false;
  // }

  // function handle(delta) {
  //     var time = 1000;
  //     var distance = 300;

  //     $('html, body').stop().animate({
  //         scrollTop: $(window).scrollTop() - (distance * delta)
  //     }, time );
  // }
  
  // if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
  //   window.onmousewheel = document.onmousewheel = wheel;

  function openDiscord(){
    window.open('https://bit.ly/redfoxgroup', '_blank')
  }

  
</script>
<style>
  .text-content{
    color:white;
    font-size: 24px;
    font-family: 'Eras';
  }
  .text-name{
    font-size: 14px;
    font-family: 'Roboto';
  }
  .main-box{
    min-height: 75vh;
    border-top: 1px solid white;
  }
  .left-box{
    border-right: 1px solid white;
  }
  .icon-discord{
    bottom: 5px;
    right: 0;
    transition-duration: 500ms;
  }
  .icon-discord:hover{
    bottom: 10px;
    filter: drop-shadow(0px 3px 10px #000);
    cursor: pointer;
  }
</style>
