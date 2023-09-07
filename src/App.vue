<script>
import { store } from './store.js';
import axios from 'axios';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppMain,
  },

  data() {
    return {
      store,
    }
  },

  beforeMount() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
      .then(response => {
        store.btc_usd = response.data.bpi.USD.rate_float
      })

    axios.get('https://v6.exchangerate-api.com/v6/b0726d51d495defac213f58a/latest/USD')
      .then((response) => {
        store.eur = response.data.conversion_rates.EUR;
        store.btc_eur = store.btc_usd * store.eur
        store.priceHistory.push(store.btc_eur)
        store.btc_eur_formated = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(store.btc_eur)
        store.index = store.priceHistory.length - 1
      })
  },

  mounted() {
    setInterval(function () {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(response => {
          store.btc_usd = response.data.bpi.USD.rate_float;
        })
      store.btc_eur = store.btc_usd * store.eur
      store.btc_eur_formated = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(store.btc_eur)
      store.priceHistory.push(store.btc_eur)

      store.index = store.priceHistory.length - 1
    }, 60000);

    setInterval(function () {
      axios.get('https://v6.exchangerate-api.com/v6/b0726d51d495defac213f58a/latest/USD')
        .then(response => {
          store.eur = response.data.conversion_rates.EUR;
        })
    }, 60000)

    setInterval(function () {
      store.time += 1
      if (store.time == 30) {
        store.time = 0
      }
    }, 1000)
  },
}
</script>
<template>
  <div class="main_container">
    <AppMain></AppMain>
  </div>
</template>
<style lang="scss">
@use './style/generals.scss' as *;

.main_container {
  width: 100 vw;
  height: 100vh;
}
</style>