<template>
  <v-card
      elevation="2"
      outlined
      class="mr-2 mb-2"
  >
    <v-card-title>
      {{ date }}
      <br/>
      {{ dayOfWeek }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <CardProperty :icon="'mdi-thermometer'" :text="temperature" />
        <CardProperty :icon="'mdi-water'" :text="humidity" />
        <CardProperty :icon="'mdi-weather-windy'" :text="windSpeed" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import CardProperty from '@/components/CardProperty';
import { DateTime } from 'luxon'

const roundToOneDecimal = (value) =>Math.round(value * 10) / 10;

export default {
  components: {CardProperty},
  props: {
    card: Object
  },
  name: "Card",
  computed: {
    date: function () {
      return DateTime.fromISO(this.card.date).toFormat('DDD');
    },
    dayOfWeek: function () {
      return DateTime.fromISO(this.card.date).toFormat('EEEE');
    },
    temperature: function () {
      const rounded = roundToOneDecimal(this.card.temperature);
      return `Temperature: ${rounded} °C`;
    },
    humidity: function () {
      const rounded = roundToOneDecimal(this.card.humidity);
      return `Humidity: ${rounded} %`;
    },
    windSpeed: function () {
      const rounded = roundToOneDecimal(this.card.windSpeed);
      return `Wind speed: ${rounded} m/s`;
    }
  }
}
</script>

<style scoped>

</style>
