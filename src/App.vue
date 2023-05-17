<template>
  <div class="container" v-if="weather">
    <Navbar/>
    <Main/>
  </div>
  <div class="loading" v-else>
      <h1>Идет загрузка...</h1>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';

import { mapState, mapActions } from 'vuex'


  export default {
    components: { 
      Navbar,
      Main
    },
    computed: {
      ...mapState(['weather'])
    },
    methods: {
      ...mapActions(['getWeather'])
    },
    created() {
      this.getWeather('Ташкент')
    },
}
</script>
