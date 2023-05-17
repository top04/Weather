<template>
  <main class="main">
    <MainContent />
    <MainWeek/>
  </main>
</template>

<script>
import MainContent from './MainContent.vue';
import MainWeek from './MainWeek.vue';

export default {
  components: {
    MainContent,
    MainWeek
}
}
</script>

