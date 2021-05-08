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
        :loading="loading"
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
    loading: false,
    valid: false,
    cityName: '',
    cityNameRules: [
      v => !!v || 'Name is required',
    ],
  }),
  methods: {
    onSubmit: async function () {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const forecast = await forecastService.getForecastByCityName(this.cityName);
        this.loading = false;
        console.dir(forecast);
        this.$emit('forecast-received', forecast)
      }
    }
  }
}
</script>

<style scoped>

</style>
