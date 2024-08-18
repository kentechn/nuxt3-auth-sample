<script lang="ts" setup>
import { loginFormSchema } from "@/schemas"

const {
  login,
  logout,
  loginUser,
} = useMyAuth()

const {
  handleSubmit,
  errors,
  isSubmitting: isLoginFormSubmitting,
  isFieldValid,
} = useForm({
  validationSchema: loginFormSchema,
  initialValues: {
    username: "",
    password: "",
  },
})

const isLoginFormValid = computed(() => {
  return isFieldValid("username") && isFieldValid("password")
})

const { value: username } = useField<string>("username")
const { value: password } = useField<string>("password")

const loginHandler = handleSubmit(async (formData) => {
  await login(formData)
})
</script>

<template>
  <div>
    <h1>Login page</h1>
    <ClientOnly>
      <VForm @submit.prevent="loginHandler">
        <VTextField
          v-model="username"
          :error-messages="errors.username"
          label="username"
        />
        <VTextField
          v-model="password"
          :error-messages="errors.password"
          label="password"
          type="password"
        />
        <br>
        <VBtn
          type="submit"
          :loading="isLoginFormSubmitting"
          :disabled="!isLoginFormValid"
        >
          Login
        </VBtn>
        <VBtn
          type="button"
          :disabled="!loginUser"
          @click="logout"
        >
          Logout
        </VBtn>
      </VForm>
    </ClientOnly>
    <br>
    <ClientOnly>
      <h4>ログインユーザー情報：</h4>
      <br>
      <div v-if="loginUser">
        {{ loginUser }}
      </div>
      <div v-else>
        ログインしていません
      </div>
    </ClientOnly>
    <div />
  </div>
</template>

<style></style>
