<template>
  <div class="stock">
    <div class="stock-info">
      <div class="container">
        <span class="stock-name">{{ stock.name }}</span>
        <span class="stock-price">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span>
      </div>
    </div>
    <div class="stock-action">
      <div class="container">
        <div class="flex">
          <input
            class="stock-amount"
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            v-model.number="quantity"
          >
          <button
            class="stock-sell"
            @click="sellStock"
            :class="{ 'stock-sell--not-enough-stocks': notEnoughStocks }"
            :disabled="quantity <= 0 || !Number.isInteger(quantity) || notEnoughStocks"
          >{{ notEnoughStocks ? 'Not enough' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    notEnoughStocks() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
        placeSellOrder: 'sellStock'
    }),  
    sellStock() {
      const order = { ...this.stock, quantity: this.quantity };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style lang="scss" scoped>

  .container {
    padding: 15px 20px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: $navbar-color;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: $navbar-color;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: $navbar-color;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: $navbar-color;
  }

  .stock {
    display: block;
    width: $stock-width;
    border-radius: $stock-border-radius;
    border: $stock-color-4 1px solid;
    overflow: hidden;

    &-info {
      background-color: $stock-color-5;
      color: $stock-color-4;

      span {
        margin-right: 5px;
      }
    }

    &-name {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
    }

    &-price {
      font-size: 14px;
    }

    &-amount {
      font-family: inherit;
      padding: 6px 8px;
      border-radius: 5px;
      border: $navbar-bgc-2 1px solid;
      outline: none;
    }

    &-sell {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 70px;
      height: 40px;
      color: #fff;
      background-color: $stock-color-6;
      font-size: 18px;
      border-radius: 5px;
      border: $stock-color-4 1px solid;
      outline: none;
      box-shadow: none;
      cursor: pointer;

      &--not-enough-stocks {
        font-size: 12px;
        background-color: #be3131;
        border-color: #740202;
      }

      &:disabled {
        opacity: 0.6;
        cursor: unset;
      }

      &:hover:not(:disabled) {
        background-color: $stock-color-4;
        box-shadow: #ededed 4px 4px 5px;
      }
    }
  }

</style>