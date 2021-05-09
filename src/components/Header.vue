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
      <v-tabs
          v-model="page"
          align-with-title
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
            v-for="item in pages"
            :key="item.name"
            v-on:click="onTabClick(item)"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    page: 'Home',
    pages: [
      {name: 'Home', link: '/'},
      {name: 'History', link: '/history'}
    ]
  }),
  methods: {
    onTabClick: function (page) {
      this.$router.push(page.link)
    }
  }
}
</script>

<style scoped>

</style>
