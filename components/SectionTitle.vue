<template lang="">
  <v-toolbar outlined short flat>
    <v-toolbar-title>
      <h3>{{ title }}</h3>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text color="pink" :to="link">See more</v-btn>
    <v-icon right>mdi-chevron-double-right</v-icon>
  </v-toolbar>
</template>
<script>
export default {
  props:{
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    }
  }
};
</script>
<style lang=""></style>
