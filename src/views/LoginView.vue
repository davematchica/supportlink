<script setup>
import { ref } from 'vue'

const theme = ref('light')
const email = ref('')
const password = ref('')
const errorMessage = ref('')

// Simulated login credentials
const validCredentials = {
  email: 'test@example.com',
  password: 'password123',
}

// Theme toggle functionality
function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Login functionality
function handleLogin() {
  if (
    email.value === validCredentials.email &&
    password.value === validCredentials.password
  ) {
    errorMessage.value = ''
    alert('Login successful!') // Replace with navigation or other logic
  } else {
    errorMessage.value = 'Invalid email or password'
  }
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="
            theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <v-card
                class="mx-auto"
                prepend-icon="mdi-account"
                subtitle="Log-in"
              >
                <template v-slot:title>
                  <span class="font-weight-black">Welcome to SupportLink</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-sheet class="mx-auto">
                    <v-form @submit.prevent="handleLogin">
                      <v-text-field
                        label="Email"
                        v-model="email"
                        variant="outlined"
                        required
                      ></v-text-field>

                      <v-text-field
                        label="Password"
                        v-model="password"
                        type="password"
                        variant="outlined"
                        required
                      ></v-text-field>

                      <v-btn class="mt-2" type="submit" block>Log in</v-btn>
                    </v-form>
                  </v-sheet>

                  <p v-if="errorMessage" class="text-red text-center mt-2">
                    {{ errorMessage }}
                  </p>

                  <v-divider class="my-5"></v-divider>

                  <h5 class="text-center">
                    Don't have an account?
                    <RouterLink to="/register"
                      >Click here to Register.</RouterLink
                    >
                  </h5>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer border app>2024 - SupportLink</v-footer>
    </v-app>
  </v-responsive>
</template>
