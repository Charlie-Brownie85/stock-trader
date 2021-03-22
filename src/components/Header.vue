<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__menu">
        <div class="navbar__home">
          <router-link to="/">Stock Trader</router-link>
        </div>
        <ul>
          <router-link to="/portfolio" active-class="active-page" tag="li"
            ><a>Portfolio</a></router-link
          >
          <router-link to="/stocks" active-class="active-page" tag="li"
            ><a>Stocks</a></router-link
          >
        </ul>
      </div>
      <div class="navbar__actions flex-align-center">
        <a href="#" @click="endDay">End Day</a>
        <dropdown
          text="Save & Load"
          :items="[{id: 'load', text: 'Load Data'}, {id: 'save', text: 'Save Data'}]"
          @dropdown-item-clicked="onDropdownClick"
        ></dropdown>
        <div>
          <span>Funds: <strong>{{ funds | currency }}</strong></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
import Dropdown from './Dropdown';

export default {
  components: {
    Dropdown,
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      endDay: 'randomizeStocks'
    }),
    onDropdownClick(item) {
      console.log('clicked: ', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $navbar-bgc;
  box-shadow: $navbar-shadow;
  color: $navbar-color;
  
  a {
    display: flex;
    padding: 20px;
    align-items: center;
    height: 100%;
  }

  &__home {
    font-size: 26px;
  }

  &__menu {
    display: flex;

    ul {
      display: flex;
      height: 100%;
      
      li:hover,
      li.active-page {
        background-color: $navbar-bgc-2;
      }
    }
  }
}

.flex-align-center {
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
}
</style>