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
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5 white--text">
        <router-link
          to="/dashboard"
          class="white--text text-uppercase hidden-xs-only"
          style="text-decoration: none"
          >Dashboard</router-link
        >&nbsp;
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
            <v-list-item
              v-for="item in sideItems"
              :key="item.name"
              router
              :to="item.link"
            >
              <v-icon left color="primary">{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
      elevation="11"
    >
      <v-list text>
        <v-subheader class="primary" color="white--text" elevation="7">
          <v-icon color="primary" class="white" right>dashboard</v-icon>
          <span class="white--text pt-1 pb-1 pr-2 pl-2">DASHBOARD</span>
        </v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            router
            :to="item.link"
          >
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
        style="cursor: pointer"
      >
        <template slot="label" slot-scope="props">
          <router-link
            style="text-decoration: none; color: black"
            :to="props.item.href"
            :icon="props.item.icon"
            v-if="props.item.href"
          >
            <v-icon left>{{ props.item.icon }}</v-icon>
            {{ props.item.name }}
          </router-link>
          <span v-else>{{ props.item.name }}</span>
        </template>
      </v-treeview>
      <!-- <v-treeview style="cursor: pointer;" shaped hoverable activatable :items="Dropitems"></v-treeview> -->
    </v-navigation-drawer>

    <v-main class="mb-12">
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-main>

    <v-footer app dark padless elevation="7">
      <v-card class="flex pt-3 pb-3" flat tile color="primary">
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>
            Vuetify Dashboard.
            <span class="white--text">
              Designed With
              <v-icon color="white">favorite</v-icon>&nbsp; By
              <a
                class="white--text"
                target="_blank"
                href="https://gaiyaobed.com.ng"
                >gaiyadev</a
              >
            </span>
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
      { title: "Tables", icon: "reorder", link: "/tables" },
      { title: "profile", icon: "mdi-flag", link: "/profile" },
      { title: "Logout", icon: "exit_to_app", link: "" }
    ],
    sideItems: [
      {
        title: "Profile",
        icon: "lock",
        link: "/profile"
      },
      {
        title: "Change Password",
        icon: "fingerprint",
        link: "/change_password"
      },
      {
        title: "Logout",
        icon: "settings_power",
        link: ""
      }
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    BreadItems: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/dashboard"
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
        name: "Dropdown Menu",
        children: [
          {
            id: 1,
            name: "Calendar",
            href: "/calender",
            icon: "favorite"
          },
          {
            id: 2,
            name: "Chrome ",
            href: "/chrome",
            icon: "lock"
          },
          {
            id: 3,
            name: "Webstorm",
            href: "/webstorm",
            icon: "schedule"
          }
        ]
      },
      {
        id: 2,
        name: "Documents :",
        children: [
          {
            id: 4,
            name: "vuetify :",
            children: [
              {
                id: 4,
                name: "src :",
                children: [
                  { id: 6, name: "index : ts" },
                  { id: 7, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 3,
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
