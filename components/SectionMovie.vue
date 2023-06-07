<template lang="">
  <v-row v-if="movies.length">
    <v-col cols="12" sm="4" md="3" v-for="movie in movies" :key="movie.id">
      <MovieCard :movie="movie" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
