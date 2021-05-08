<template>
  <v-form
      @submit.prevent="onSubmit"
      ref="form"
      v-model="valid"
      lazy-validation>

    <v-row>
      <v-col
          class="d-flex"
          cols="12"
          sm="6"
      >
        <v-text-field
            v-model="searchQuery"
            :rules="searchQueryRules"
            autocomplete="false"
            :label="searchType"
            required
        ></v-text-field>
      </v-col>
      <v-col
          class="d-flex"
          cols="12"
          sm="6"
      >
        <v-select
            v-model="searchType"
            v-on:change="onSearchTypeChange"
            :items="searchTypes"
            label="Search type"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          type="submit"
          :loading="loading"
      >
        Get forecast
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import forecastService from "@/services/forecastService";

const cityName = 'City name';
const zipCode = 'ZIP code';

const rulesDictionary = {};
rulesDictionary[cityName] = v => !!v || 'Name is required';
rulesDictionary[zipCode] = v => {
  const pattern = /(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})/
  return pattern.test(v) || 'Invalid ZIP code'
}

const getForecastDictionary = {};
getForecastDictionary[cityName] = async cityName => await forecastService.getForecastByCityName(cityName);
getForecastDictionary[zipCode] = async zipCode => await forecastService.getForecastByZipCode(zipCode);

export default {
  name: 'Form',
  data: () => ({
    loading: false,
    valid: false,
    searchQuery: '',
    searchType: '',
    searchTypes: [cityName, zipCode]
  }),
  created() {
    this.searchType = this.searchTypes[0];
  },
  methods: {
    onSubmit: async function () {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const forecast = await getForecastDictionary[this.searchType](this.searchQuery);
        this.loading = false;
        this.$emit('forecast-received', forecast)
      }
    },
    onSearchTypeChange: function () {
      this.searchQuery = '';
    }
  },
  computed: {
    searchQueryRules: function () {
      return [v => rulesDictionary[this.searchType](v)]
    },
  }
}
</script>

<style scoped>

</style>
