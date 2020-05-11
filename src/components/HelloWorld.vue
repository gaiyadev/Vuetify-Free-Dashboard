<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h3 class="display-2 font-weight-bold mb-3">Welcome to Vuetify Dashboard</h3>
        <h4>
          <router-link to="/dashboard">Explore the dashboard</router-link>
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
