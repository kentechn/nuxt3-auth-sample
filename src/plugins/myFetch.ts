export default defineNuxtPlugin(() => {
  const userAuth = useCookie("token")
  const config = useRuntimeConfig()

  const $myFetch = $fetch.create({
    baseURL: config.public.apiBaseUrl ?? "/api",
    // baseURL: "/api",
    retry: 3,
    onRequest({ options }) {
      console.log("onRequest details:")
      console.log(options)

      if (userAuth.value) {
        // Add Authorization header
        options.headers = {
          ...options.headers || {},
          authorization: `Bearer ${userAuth.value}`,
        }
      }
    },
    onResponse({ response }) {
      console.log("onResponse details:")
      console.log(response)

      // response._data = new myBusinessResponse(response._data)
    },
    // onResponseError({ response }) {
    //   if (response.status === 401) {
    //     navigateTo("/login")
    //   }
    // },
  })

  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      myFetch: $myFetch,
    },
  }
})
