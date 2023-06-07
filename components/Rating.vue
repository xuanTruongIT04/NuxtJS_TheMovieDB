<template lang="">
  <v-list two-line class="align-end" color="transparent">
    <v-list-item>
      <v-list-item-avatar>
        <v-icon color="yellow" x-large>mdi-star</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <p>{{ data.vote_average }}/10</p>
        <span class="grey--text subtitle"> {{ data.vote_count }} votes</span>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
