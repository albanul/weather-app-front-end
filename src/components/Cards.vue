<template>
  <v-row>
    <Card v-for="(card, i) in cards" :key="i" :card="card"/>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import Card from "@/components/Card";

export default {
  props: {
    cards: Array
  },
  name: "Cards",
  components: {Card}
}
</script>

<style scoped>

</style>
