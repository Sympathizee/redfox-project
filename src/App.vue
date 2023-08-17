<template>
  <v-app>
    <v-card>
      <v-layout class="p-0 redfox-bg">
        <default-bar @move-to-route="changeRouteClick" />
        <v-main style="max-width: 1920px;min-height: 100vh;padding-left: 0px!important;" class="redfox">
          <v-container class="ml-10" fluid>
            <typewriter ref="typing" :key="routeName + '-key'" color="#FFFFFF" prepend-bold="RED" prepend-med="FOX" :type="routeName? routeName : ''"></typewriter>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
  import DefaultBar from '@/layouts/default/AppBar.vue'
  import Typewriter from '@/components/Typewriter.vue'
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import { ref } from 'vue';
  // import { onMounted } from 'vue';

  var typing = ref(null);
  var route = useRoute();
  var routeName = '';
  routeName = computed(() => route.name);
  function changeRouteClick(path){
    typing.value.changeRoute(path);
  }
</script>
<style scope>
  .redfox{
    background-color: #b21c1c!important;
  }
</style>
