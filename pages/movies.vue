<template lang="">
  <v-container>
    <div class="text-center my-4">
      <v-btn value="popular" class="mr-2" @click="handleGetBy('popular')"
        >Popular</v-btn
      >
      <v-btn value="upcoming" class="mr-2" @click="handleGetBy('upcoming')"
        >Upcoming</v-btn
      >
      <v-btn value="top_rated" class="mr-2" @click="handleGetBy('top_rated')"
        >Top Rated</v-btn
      >
    </div>
    <v-row v-if="$fetchState.pending">
      <v-col cols="12" sm="4" md="3" v-for="(skt, index) in 20" :key="index">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occured!</h2>
    </v-row>
    <SectionMovie v-else :movies="movies"/>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            :total-visible="10"
            v-model="currentPage"
            :length="totalPages"
            @input="handlePageChange"
          >
          </v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { parse } from "path";

export default {
  data() {
    return {
      movies: [],
      getBy: "popular",
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/movie/${this.getBy}?page=${this.currentPage}`)
      .then((res) => {
        this.movies = res.results;
        this.totalPages = res.total_pages;
        this.totalResults = res.total_results;
        this.$router.push({ query: { page: this.currentPage } });
      });
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
      this.$fetch();
    },
    handleGetBy(value) {
      this.getBy = value;
      this.currentPage = 1;
      this.$fetch();
    },
  },
};
</script>

<style lang=""></style>
