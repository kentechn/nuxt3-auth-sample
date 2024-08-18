export default defineNuxtPlugin(async () => {
  const { getMe } = useMyAuth()

  await getMe()
})
