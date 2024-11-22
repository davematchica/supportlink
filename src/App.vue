<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const sidebarItems = [
  { title: 'Clients', icon: 'mdi-account', route: '/clients' },
  { title: 'Resources', icon: 'mdi-folder', route: '/resources' },
  { title: 'Requests', icon: 'mdi-message', route: '/requests' },
  { title: 'Feedback', icon: 'mdi-comment', route: '/feedback' },
]
const theme = ref('light')
const router = useRouter()

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
function navigate(route) {
  router.push(route)
}
</script>

<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="item in sidebarItems"
            :key="item.title"
            @click="navigate(item.route)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar-title>SupportLink</v-toolbar-title> <v-spacer></v-spacer>
      <v-btn text @click="navigate('/home')">Home</v-btn>
      <v-btn text @click="navigate('/dashboard')">Dashboard</v-btn>
      <v-btn text @click="toggleTheme"> Theme: {{ theme }} </v-btn>
    </v-app-bar>
    <v-main> <router-view /> </v-main>
  </v-app>

  <RouterView />
</template>

<style>
.v-application {
  background-color: var(--v-background-base);
}
</style>
