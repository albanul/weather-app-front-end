<template>
  <v-row>
    <v-col lg="4" v-for="(card, i) in cards" :key="i">
      <Card :card="card"/>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Cards",
  props: {
    cards: Array
  },
  components: {Card}
}
</script>

<style scoped>

</style>
