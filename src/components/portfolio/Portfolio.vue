<template>
  <div class="stocks-container">
    <Stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from './Stock'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    Stock,
  }
};
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