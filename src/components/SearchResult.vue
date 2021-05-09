<template>
  <v-col v-if="!!searchResult">
    <v-row v-if="cardsAreNotEmpty">
      <h2>5 days forecast for {{ searchQuery }}</h2>
      <Cards :cards="cards" class="mt-4"/>
    </v-row>
    <v-row justify="center" v-else-if="cardsAreEmpty">
      <p>Sorry, nothing has been found. Please try another value...</p>
    </v-row>
  </v-col>
</template>

<script>
import Cards from "@/components/Cards";

export default {
  name: "SearchResult",
  props: {
    searchResult: Object
  },
  components: {Cards},
  computed: {
    searchQuery: function () {
      if (!this.searchResult) {
        return '';
      }
      return this.searchResult.cityName || this.searchResult.zipCode;
    },
    cards: function () {
      if (!this.searchResult) {
        return null;
      }
      return this.searchResult.items;
    },
    cardsAreNotEmpty: function () {
      return this.cards && this.cards.length > 0;
    },
    cardsAreEmpty: function () {
      return this.cards && this.cards.length === 0;
    }
  }
}
</script>

<style scoped>

</style>
