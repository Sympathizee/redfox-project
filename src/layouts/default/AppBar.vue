<template>
  <v-navigation-drawer
    floating
    rail
    theme="redfox"
    color="secondary"
    class="leftbar"
  >
    <v-list density="compact" nav class="vertical-center">
      <v-tooltip :text="section.name" v-for="section in sections">
        <template v-slot:activator="{props}">
          <v-list-item :style="section.style" :key="section.name + '-' + section.active.value" title="" :active="section.active.value" v-bind="props" class="mt-4 rfNav" density="compact" theme="redfox" color="primary" @click="goTo(section)" :prepend-icon="section.icon" :value="section.name">
          </v-list-item>
        </template>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute()
  const currentRouteName = computed(() => route.name)
  const sections = [
    {
      name: 'Redfox',
      icon: '',
      href: 'redfox/',
      active: false,
      style: {backgroundSize:'cover',backgroundPosition:'center',backgroundImage:"url('https://media.discordapp.net/attachments/1131603488380555297/1141712230900060271/R_1.png?width=482&height=482')"},
    },
    {
      name: 'Architecture',
      icon: 'mdi-account-hard-hat',
      href: 'redfox/architecture/',
      active: computed(() => route.name === 'architecture'? true : false),
      style: {},
    },
    {
      name: 'Automotive',
      icon: 'mdi-car',
      href: 'redfox/automotive/',
      active: computed(() => route.name === 'automotive'? true : false),
      style: {},
    },
    {
      name: 'Homestay',
      icon: 'mdi-home-account',
      href: 'redfox/homestay/',
      active: computed(() => route.name === 'homestay'? true : false),
      style: {},
    },
  ];
  const emit = defineEmits(['moveToRoute']);

  function goTo(path){
    if(currentRouteName.value !== path.name.toLowerCase()){
      window.scrollTo(0, 0);
      setTimeout(() => {
        emit('moveToRoute', '/' + path.href);
      }, 500);
    }
  }

</script>

<style scoped>
.nav-icon-white{
  color:blue!important;
}
.vertical-center{
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.rfNav{
  background-color: transparent!important;
}
.test-1{
  background-color: red!important;
}
.leftbar{
  height: 100vh!important;
  position: fixed!important;
}
.test-3{
  background-color: aqua!important;
}
</style>
