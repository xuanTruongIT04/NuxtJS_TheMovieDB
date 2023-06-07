<template lang="">
  <v-container>
    <SectionTitle title="Popular Movies" link="/movies" />
    <SectionMovie v-if="movies.length" :movies="movies" />

    <SectionTitle title="Upcoming movies" link="/movies" />
    <SectionMovie v-if="upcoming.length" :movies="upcoming" />
  </v-container>
</template>
<script>
export default {
  layout: "homepage",
  async asyncData({ $axios }) {
    try {
      const res1 = await $axios.$get("/movie/popular");
      const res2 = await $axios.$get("/movie/upcoming");
      return {
        movies: res1.results.slice(0, 8),
        upcoming: res2.results.slice(0, 8),
      };
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
