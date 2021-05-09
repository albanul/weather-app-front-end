<template>
  <div v-if="!!response">
    <v-row v-if="cardsAreNotEmpty">
      <h2>5 days forecast for {{ searchQuery }}</h2>
      <Cards :cards="cards" class="mt-4"/>
    </v-row>
    <v-row justify="center" v-else-if="cardsAreEmpty">
      <p>Sorry, nothing has been found. Please try another value...</p>
    </v-row>
  </div>
</template>

<script>
import Cards from "@/components/Cards";

export default {
  name: "SearchResult",
  props: {
    response: Object
  },
  components: {Cards},
  computed: {
    searchQuery: function () {
      if (!this.response) {
        return '';
      }
      return this.response.cityName || this.response.zipCode;
    },
    cards: function () {
      if (!this.response) {
        return null;
      }
      return this.response.items;
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
