<script setup lang="ts">
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
  <div>Здесь будет сайт приложения</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
