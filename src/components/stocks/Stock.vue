<template>
  <div class="stock">
    <div class="stock-info">
      <div class="container">
        <span class="stock-name">{{ name }}</span>
        <span class="stock-price">(Price: {{ price }})</span>
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
            class="stock-buy"
            @click="buyStock"
            :disabled="quantity <= 0 || !Number.isInteger(quantity) || !enoughFunds"
            :class="{ 'stock-buy--not-enough-funds': !enoughFunds }"
          >{{ !enoughFunds? 'Not enough funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    enoughFunds() {
      return this.quantity * this.price <= this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = { quantity: this.quantity, ...this.$props };
      this.$store.dispatch('buyStock', order);
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
    border: $stock-color-1 1px solid;
    overflow: hidden;

    &-info {
      background-color: $stock-color-2;
      color: $stock-color-1;

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

    &-buy {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 70px;
      height: 40px;
      color: #fff;
      background-color: $stock-color-3;
      font-size: 18px;
      border-radius: 5px;
      border: $stock-color-1 1px solid;
      outline: none;
      box-shadow: none;
      cursor: pointer;

      &--not-enough-funds {
        font-size: 12px;
        background-color: #be3131;
        border-color: #740202;
      }

      &:disabled {
        opacity: 0.6;
        cursor: unset;
      }

      &:hover:not(:disabled) {
        background-color: $stock-color-1;
        box-shadow: #ededed 4px 4px 5px;
      }
    }
  }

</style>