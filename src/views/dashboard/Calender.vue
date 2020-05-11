<template>
  <v-row justify="center">
    <v-col cols="12" md="8" xs="8">
      <v-date-picker v-model="picker"></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10)
    };
  }
};
</script>