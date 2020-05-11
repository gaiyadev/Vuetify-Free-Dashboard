<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="primary" elevation="7" height="75">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5 white--text">
        <router-link
          to="/dashboard"
          class="white--text text-uppercase"
          style="text-decoration: none;"
        >Dashboard</router-link>&nbsp;
        <!-- <span class="font-weight-light">Keep</span> -->
      </span>
      <v-spacer></v-spacer>
      <v-text-field
        id="search"
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>

      <v-badge color="green" content="6"></v-badge>
      <v-btn icon dark v-on="on">
        <v-icon>add_alert</v-icon>
      </v-btn>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon dark v-on="on">
              <v-icon>account_circle</v-icon>
            </v-btn>
            <!-- <v-btn color="primary" dark v-on="on">Dropdown</v-btn> -->
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in sideItems" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4" elevation="7">
      <v-list flat>
        <v-subheader>
          <v-icon color="primary" left>dashboard</v-icon>
          <span class="primary--text pt-1 pb-1 pr-2 pl-2">DASHBOARD</span>
        </v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="item in items" :key="item.title" router :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>

    <v-footer dark padless elevation="7">
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>
            Vuetify Dashboard.
            <span class="primary--text">Design By Gaiya M. Obed</span>
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    item: 1,
    items: [
      { title: "User Profile", icon: "perm_identity", link: "/user" },
      { title: "Tables", icon: "mdi-account", link: "/tables" },
      { title: "profile", icon: "mdi-flag", link: "/profile" },
      { title: "Logout", icon: "exit_to_app", link: "" }
    ],
    sideItems: [
      { title: "Profile" },
      { title: "Change Password" },
      { title: "Logout" }
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
#search {
  width: 1px;
}
</style>
