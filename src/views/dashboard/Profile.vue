<template>
  <v-row>
    <v-col cols="12" md="2" sm="12"></v-col>
    <v-col cols="12" md="8">
      <v-card elevation="7" class="mt-12">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="pt-5 pb-5 pr-5 pl-5"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >Validate</v-btn
          >

          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

          <v-btn color="warning" @click="resetValidation"
            >Reset Validation</v-btn
          >
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12" md="2" sm="12"></v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
