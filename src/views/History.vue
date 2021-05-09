<template>
  <v-main>
    <v-container>
      <div class="about">
        <h1>Weather forecast history:</h1>
      </div>
      <v-expansion-panels>
        <v-expansion-panel
            v-for="(item, i) in history"
            :key="i"
        >
          <v-expansion-panel-header>
            {{ item.cityName || item.zipCode }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col>
                <SearchResult :searchResult="item"/>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>
  </v-main>
</template>

<script>

import SearchResult from "@/components/SearchResult";

export default {
  name: 'History',
  components: {SearchResult},
  data: () => ({
    history: null
  }),
  created() {
    let history = localStorage.getItem('history');
    if (!history) {
      history = '[]';
    }

    history = JSON.parse(history);

    this.history = history;
  }
}
</script>
