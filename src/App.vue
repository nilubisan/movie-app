<script setup lang="ts">
import { onMounted } from 'vue';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useFetch } from './app/fetch';

const { isLoading, isError, data, error } = useFetch()
console.log(data);

onMounted(() => {
  const firebaseConfig = {
            apiKey: "AIzaSyDdDForfHHAz5mY0nvuKP6YWfCgmtcj37U",
            authDomain: "fir-sample-898fd.firebaseapp.com",
            projectId: "fir-sample-898fd",
            storageBucket: "fir-sample-898fd.appspot.com",
            messagingSenderId: "343313224769",
            appId: "1:343313224769:web:a0f794e57b44073be7e2c0"
        };
        const app = initializeApp(firebaseConfig);
        getAnalytics(app);
})


</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <ul v-else>
    <li v-for="item in data" :key="item?.id">{{ item?.original_title }}</li>
  </ul>

</template>

<style scoped>
</style>
