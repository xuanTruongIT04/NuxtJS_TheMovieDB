<template lang="">
  <div class="">
    <div>
      <h4 class="grey--text title">Director</h4>
      <span v-for="(director, index) in getDirectors" :key="index">
        {{ director }}<span v-if="getDirectors.length - 1 != index">, </span>
      </span>
    </div>

    <div class="mt-2">
      <h4 class="grey--text title">Stars</h4>
      <span v-for="(star, index) in getStars" :key="index">
        {{ star.name }}<span v-if="getStars.length - 1 != index">, </span>
      </span>
    </div>

    <div class="mt-2">
      <h4 class="grey--text title">Genres</h4>
      <span v-for="(genre, index) in getGenres" :key="index">
        {{ genre.name }}<span v-if="getGenres.length - 1 != index">, </span>
      </span>
    </div>

    <div class="mt-2">
      <h4 class="grey--text title">Release Date</h4>
      <span>{{ data.release_date }}</span>
    </div>

    <div class="mt-2">
      <h4 class="grey--text title">Runtime</h4>
      <span>{{ data.runtime }} mins</span>
    </div>

    <div class="mt-2">
      <h4 class="grey--text title">Spoken Languages</h4>
      <span v-for="(language, index) in getLanguages" :key="index">
        {{ language.name }}<span v-if="getLanguages.length - 1 != index">, </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    getDirectors() {
      let directors = [];
      for (const item of this.data.credits.crew) {
        if (item.job === "Director") {
          directors.push(item.name);
        }
      }
      return directors;
    },
    getStars() {
      return this.data.credits.cast.slice(0, 6);
    },
    getGenres() {
      return this.data.genres;
    },
    getLanguages() {
      return this.data.spoken_languages;
    },
  },
};
</script>
<style lang=""></style>
