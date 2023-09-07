<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },

}
</script>
<template lang="">
    <div class="container d-flex justify-content-center align-items-center h-100 w-100">
        <div class="row me-3">
            <div class="col">
                <img src="../assets/images/icon-bitcoin.svg" alt="not found">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h1 v-if="(store.priceHistory[store.index] == store.priceHistory[store.index - 1])" class="orange m-0"><i class="fa-solid fa-equals orange me-2"></i>{{store.btc_eur_formated}}</h1>
                <h1 v-else-if="(store.btc_eur < store.priceHistory[store.index - 1])" class="red m-0"><i class="fa-sharp fa-solid fa-arrow-down red me-2"></i>{{store.btc_eur_formated}}</h1>
                <h1 v-else class="green m-0"><i class="fa-sharp fa-solid fa-arrow-up green me-2"></i>{{store.btc_eur_formated}}</h1>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.white {
    color: white;
}

.orange {
    font-size: 5rem;
    color: orange;
}

.red {
    font-size: 5rem;
    color: red;
}

.green {
    color: green;
    font-size: 5rem;

}
</style>