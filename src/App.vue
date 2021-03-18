<template>
  <div id="app">
      <Header />
      <div class="container">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
  .container {
    padding: 50px 0;
  }
</style>
