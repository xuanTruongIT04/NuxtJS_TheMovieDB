<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="footer-content orange lighten-1 white--text text-center w-100"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          target="_blank"
          v-for="(icon, index) in icons"
          :key="index"
          :href="icon.link"
          icon
        >
          <v-icon size="24px">
            {{ icon.title }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="footer-title white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="footer-bottom-content white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { title: "mdi-facebook", link: "https://facebook.com" },
      { title: "mdi-twitter", link: "https://twitter.com" },
      { title: "mdi-linkedin", link: "https://linkedin.com" },
      { title: "mdi-instagram", link: "https://instagram.com" },
    ],
  }),
};
</script>

<style lang="scss">
.footer-content {
  min-width: 100%;
}

.footer-title {
  max-width: 830px;
  margin: 0 auto;
}

.footer-bottom-content {
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: rgba(255, 68, 0, 0.226);
}
</style>
