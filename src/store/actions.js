import axios from 'axios';

export const loadData = ({ commit }) => {
  axios.get(`${process.env.VUE_APP_ENDPOINT_URL}data.json`)
    .then( response => response.data )
    .then( data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds,
        }

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    } );
};