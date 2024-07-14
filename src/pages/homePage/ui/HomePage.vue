<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <ul v-else>
    <li v-for="item in data.results" :key="item?.id">{{ item?.original_title }}</li>
  </ul>
</template>

<script setup>
  import { useFetch } from '../../../shared/lib/fetch'

    const getPopularUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    const { isLoading, isError, data, error } = useFetch({ url: getPopularUrl })
</script>

<style lang="scss" scoped>

</style>