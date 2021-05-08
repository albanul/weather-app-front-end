<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
    <v-text-field
        v-model="cityName"
        :rules="cityNameRules"
        :aria-autocomplete="false"
        label="City name"
        required
    ></v-text-field>

    <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="onSubmit"
    >
      Check weather
    </v-btn>
  </v-form>
</template>

<script>
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
    onSubmit: function () {
      if (this.$refs.form.validate()) {
        return console.log(this.cityName);
      }
    }
  }
}
</script>

<style scoped>

</style>
