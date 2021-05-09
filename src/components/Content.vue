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
    <SearchResult :response="response"/>
  </v-container>
</template>

<script>
import Form from "@/components/Form";
import SearchResult from "@/components/SearchResult";

export default {
  name: 'Content',
  components: {SearchResult, Form},
  data: () => ({
    response: null
  }),
  methods: {
    forecastReceived: function (data) {
      this.response = data;
    }
  }
}
</script>
