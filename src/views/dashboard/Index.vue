<template>
  <v-app id="keep">
    <v-app-bar
      src="https://images.unsplash.com/photo-1586272778445-ccec18ea579c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60"
      fade-img-on-scroll
      app
      clipped-left
      color="primary"
      elevation="7"
      height="75"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5 white--text">
        <router-link
          to="/dashboard"
          class="white--text text-uppercase hidden-xs-only"
          style="text-decoration: none;"
        >Dashboard</router-link>&nbsp;
        <!-- <span class="font-weight-light">Keep</span> -->
      </span>
      <v-spacer></v-spacer>
      <v-text-field
        elevation="5"
        id="search"
        solo-inverted
        background-color="white"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>

      <v-badge class="pl-9" color="green" content="6"></v-badge>
      <v-btn icon dark right>
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

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4" elevation="11">
      <v-list text>
        <v-subheader class="primary" color="white--text" elevation="7">
          <v-icon color="primary" class="white" right>dashboard</v-icon>
          <span class="white--text pt-1 pb-1 pr-2 pl-2">DASHBOARD</span>
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
      <v-treeview
        shaped
        hoverable
        activatable
        :items="Dropitems"
        router
        open-on-click
        :to="items.href"
      ></v-treeview>
    </v-navigation-drawer>

    <v-row>
      <v-col cols="12" md="12">
        <v-card elevation="1" class="mb-n11">
          <v-breadcrumbs :items="BreadItems" color="primary--text">
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

    <v-content class="mb-12">
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>

    <v-footer app dark padless elevation="7">
      <v-card class="flex pt-3 pb-3" flat tile color="primary">
        <!-- <v-card-title class="primary">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>-->

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>
            Vuetify Dashboard.
            <span class="white--text">Designed By Gaiya M. Obed</span>
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
//import BreadCrum from "@/components/BreadCrum";
export default {
  // components: {
  //   BreadCrum
  // },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    item: 1,
    items: [
      { title: "User Profile", icon: "perm_identity", link: "/user" },
      { title: "Tables", icon: "reorder", link: "/tables" },
      { title: "profile", icon: "mdi-flag", link: "/profile" },
      { title: "Logout", icon: "exit_to_app", link: "" }
    ],
    sideItems: [
      { title: "Profile" },
      { title: "Change Password" },
      { title: "Logout" }
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    BreadItems: [
      {
        text: "Dashboard",
        disabled: false,
        href: "dashbaord"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1"
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ],
    Dropitems: [
      {
        id: 1,
        name: "Dropdown :",
        children: [
          {
            id: 1,
            name: "Calendar",
            link: "profile"
          },
          {
            id: 2,
            name: "Chrome ",
            link: "profile"
          },
          {
            id: 3,
            name: "Webstorm",
            href: "/profile"
          }
        ]
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}

input::label {
  color: red !important;
  opacity: 1;
}
#search {
  color: black;
}
</style>
