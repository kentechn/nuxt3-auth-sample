export default defineNuxtRouteMiddleware(async (to) => {
  if (to.name === "login") {
    return
  }

  const { loginUser } = useLoginUser()

  if (!loginUser.value) {
    return navigateTo("/login")
  }
})
