<template>
  <v-card
      class="mr-2 mb-2"
      elevation="2"
      outlined
  >
    <v-card-title>
      {{ date }}
      <br/>
      {{ dayOfWeek }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <CardProperty :icon="'mdi-thermometer'" :text="temperature"/>
        <CardProperty :icon="'mdi-water'" :text="humidity"/>
        <CardProperty :icon="'mdi-weather-windy'" :text="windSpeed"/>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import CardProperty from '@/components/CardProperty';
import utils from "@/utils/utils";

export default {
  components: {CardProperty},
  props: {
    card: Object
  },
  name: "Card",
  computed: {
    date: function () {
      return utils.toDateWithFullMonth(this.card.date);
    },
    dayOfWeek: function () {
      return utils.toDayOfWeek(this.card.date);
    },
    temperature: function () {
      const rounded = utils.roundToOneDecimal(this.card.temperature);
      return `Temperature: ${rounded} °C`;
    },
    humidity: function () {
      const rounded = utils.roundToOneDecimal(this.card.humidity);
      return `Humidity: ${rounded} %`;
    },
    windSpeed: function () {
      const rounded = utils.roundToOneDecimal(this.card.windSpeed);
      return `Wind speed: ${rounded} m/s`;
    }
  }
}
</script>

<style scoped>

</style>
