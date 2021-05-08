<template>
  <v-app>
    <Header/>

    <v-main>
      <Content/>
    </v-main>
  </v-app>
</template>

<script>
import Content from './components/Content';
import Header from "@/components/Header";

export default {
  name: 'App',

  components: {
    Header,
    Content,
  },

  data: () => ({
    //
  }),
};
</script>
