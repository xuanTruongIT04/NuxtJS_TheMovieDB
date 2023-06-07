 export const state = () => ({
   genres: [],
   now_playing: [],
 });

 export const mutations = {
   SET_GENRES(state, genres) {
     state.genres = genres;
   },
   SET_NOWPLAYING(state, data) {
     state.now_playing = data;
   },
 };

 export const actions = {
   async loadGenres({
     state,
     commit
   }) {
     try {
       const data = await this.$axios.$get("/genre/movie/list");
       if (data) {
         commit("SET_GENRES", data.genres);
       }
     } catch (error) {
       console.log(error);
     }
   },
   async loadNowPlaying({
     state,
     commit
   }) {
     try {
       const data = await this.$axios.$get("/movie/now_playing");
       if (data) {
         commit("SET_NOWPLAYING", data.results.slice(0, 3));
       }
     } catch (error) {
       console.log(error);
     }
   },
 };
