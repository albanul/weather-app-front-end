<template>
  <v-app-bar
      app
      color="primary"
      dark
      flat
  >
    <!--    <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

    <v-toolbar-title>WeatherApp</v-toolbar-title>

    <v-spacer></v-spacer>

    <template>
      <v-tabs align-with-title :value="currentPageIndex">
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
            v-for="page in pages"
            :key="page.name"
            v-on:click="onTabClick(page)"
        >
          {{ page.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    currentPageIndex: null,
    pages: [
      {name: 'Home', link: '/'},
      {name: 'History', link: '/history'}
    ]
  }),
  mounted() {
    this.currentPageIndex = this.pages.findIndex(p => p.name === this.$route.name);
  },
  methods: {
    onTabClick: function (page) {
      if (this.$route.name !== page.name) {
        this.$router.push(page.link)
      }
    }
  }
}
</script>

<style scoped>

</style>
