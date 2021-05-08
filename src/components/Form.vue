<template>
  <v-form
      @submit.prevent="onSubmit"
      ref="form"
      v-model="valid"
      lazy-validation>
    <v-text-field
        v-model="cityName"
        :rules="cityNameRules"
        autocomplete="false"
        label="City name"
        required
    ></v-text-field>

    <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        type="submit"
    >
      Check weather
    </v-btn>
  </v-form>
</template>

<script>
import forecastService from "@/services/forecastService";

export default {
  name: 'Form',
  data: () => ({
    valid: false,
    cityName: '',
    cityNameRules: [
      v => !!v || 'Name is required',
    ],
  }),
  methods: {
    onSubmit: async function () {
      if (this.$refs.form.validate()) {
        const forecast = await forecastService.getForecastByCityName(this.cityName);
        console.table(forecast.items);
        this.$emit('forecast-received', forecast.items)
      }
    }
  }
}
</script>

<style scoped>

</style>
