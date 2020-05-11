<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-card elevation="7">
          <v-breadcrumbs :items="BreadItems">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                :href="item.href"
                :disabled="item.disabled"
              >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>