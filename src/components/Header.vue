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
import axios from 'axios';

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
      endDay: 'randomizeStocks',
      fetchData: 'loadData',
    }),
    onDropdownClick(item) {
      if (item.id === 'save') {
        this.saveData();
      } else if(item.id === 'load') {
        this.loadData();
      }
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios.put(`${process.env.VUE_APP_ENDPOINT_URL}data.json`, data)
        .then(
          response => { console.log(response) },
          error => { console.log(error) }
        );
    },
    loadData() {
      this.fetchData();
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