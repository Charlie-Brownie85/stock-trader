import stocks from '../../data/stocks';

const getRandomIntPrice = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MAX_STOCK_PRICE_DROP = -25;
const MAX_STOCK_PRICE_RAISE = 25;

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {
    state.stocks = state.stocks.map(
      stock => {
        stock.price += getRandomIntPrice(MAX_STOCK_PRICE_DROP, MAX_STOCK_PRICE_RAISE)
        return stock;
      }
    );
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks );
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => state.stocks
};

export default {
  state,
  mutations,
  actions,
  getters
};