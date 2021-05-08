<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            :src="require('../assets/weather-app.png')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Weather App
        </h1>

        <p class="subheading font-weight-regular">
          Please provide city name to get a forecast
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="pb-4">
      <v-col cols="4">
        <Form v-on:forecast-received="forecastReceived"/>
      </v-col>
    </v-row>
    <v-row>
      <v-divider class="mb-4"></v-divider>
    </v-row>
    <v-row v-if="cardsAreNotEmpty">
      <h2>5 days forecast for {{ cityName }}</h2>
      <Cards :cards="cards" class="mt-4"/>
    </v-row>
    <v-row justify="center" v-else-if="cardsAreEmpty">
      <p>Sorry, nothing has been found. Please try another value...</p>
    </v-row>
  </v-container>
</template>

<script>
import Form from "@/components/Form";
import Cards from "@/components/Cards";

export default {
  name: 'Content',
  components: {Cards, Form},
  data: () => ({
    cityName: null,
    zipCode: null,
    cards: null
  }),
  methods: {
    forecastReceived: function (data) {
      this.cityName = data.cityName;
      this.zipCode = data.zipCode;
      this.cards = data.items;
    }
  },
  computed: {
    cardsAreNotEmpty: function () {
      return this.cards && this.cards.length > 0;
    },
    cardsAreEmpty: function () {
      return this.cards && this.cards.length === 0;
    }
  }
}
</script>
