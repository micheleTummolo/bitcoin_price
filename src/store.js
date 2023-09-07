import { reactive } from 'vue';

export const store = reactive({
    btc_usd: 0,
    btc_eur: 0,
    btc_eur_formated: 0,
    priceHistory: [],
    index: 0,
    eur: 0,
    time: 0,
});