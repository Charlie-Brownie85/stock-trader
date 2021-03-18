<template>
  <div class="stocks-container">
    <Stock
      v-for="stock in stocks"
      :key="stock.id"
      v-bind="stock"
    />
  </div>
</template>

<script>
import Stock from './Stock';

export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
}
</script>

<style lang="scss" scoped>
  .stocks-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($stock-width, 1fr));
    grid-template-rows: repeat(auto-fill, 120px);
    grid-row-gap: 75px;
    grid-column-gap: 50px;
  }
</style>