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
                prepend-icon="mdi-account-plus"
                subtitle="Register"
              >
                <template v-slot:title>
                  <span class="font-weight-black">Create an Account</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-sheet class="mx-auto">
                    <v-form @submit.prevent="handleRegister">
                      <v-text-field
                        label="Full Name"
                        v-model="name"
                        variant="outlined"
                        :rules="[rules.required]"
                      ></v-text-field>

                      <v-text-field
                        label="Email"
                        v-model="email"
                        variant="outlined"
                        :rules="[rules.required, rules.email]"
                      ></v-text-field>

                      <v-text-field
                        label="Password"
                        type="password"
                        v-model="password"
                        variant="outlined"
                        :rules="[rules.required, rules.minLength]"
                      ></v-text-field>

                      <v-btn class="mt-2" type="submit" block>Register</v-btn>
                    </v-form>
                  </v-sheet>

                  <v-divider class="my-5"></v-divider>

                  <h5 class="text-center">
                    Already have an account?
                    <RouterLink to="/login">Log in here.</RouterLink>
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

<script>
import { ref } from 'vue'

export default {
  name: 'RegisterView',
  setup() {
    const theme = ref('light')
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const rules = {
      required: value => !!value || 'This field is required.',
      email: value => /.+@.+\..+/.test(value) || 'Enter a valid email.',
      minLength: value =>
        value.length >= 6 || 'Password must be at least 6 characters.',
    }

    const onClick = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    const handleRegister = () => {
      console.log('Registering user:', {
        name: name.value,
        email: email.value,
        password: password.value,
      })

      // Simulate successful registration and redirect to login
      alert('Registration successful!')
      window.location.href = '/' // Redirect to login page
    }

    return {
      theme,
      name,
      email,
      password,
      rules,
      onClick,
      handleRegister,
    }
  },
}
</script>

<style>
/* Add styling for the RegisterView if needed */
</style>
