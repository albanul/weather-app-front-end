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
    <v-row justify="center">
      <Form />
    </v-row>
  </v-container>
</template>

<script>
  import Form from "@/components/Form";
  export default {
    name: 'Content',
    components: {Form},
    data: () => ({
    }),
  }
</script>
