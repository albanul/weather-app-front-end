<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon v-text="icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="text"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "CardProperty",
  props: {
    icon: String,
    text: String
  }
}
</script>

<style scoped>

</style>
