import type { UseFetchOptions } from "nuxt/app"

export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) {
  const config = useRuntimeConfig()
  const userAuth = useCookie("token")

  const defaultOptions: UseFetchOptions<T> = {
    baseURL: config.public.apiBaseUrl ?? "/api",
    retry: 3,
    onRequest({ options }) {
      console.log("onRequest details:")
      if (userAuth.value) {
        // Add Authorization header
        options.headers = {
          ...options.headers || {},
          authorization: `Bearer ${userAuth.value}`,
        }
      }
      console.log("options.headers:")
      console.log(options.headers)
    },
    onResponse({ response }) {
      console.log("onResponse details:")

      console.log("response:")
      console.log(response)

      // response._data = new myBusinessResponse(response._data)
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo("/login")
      }
    },
  }

  return useFetch(url, {
    ...defaultOptions,
    ...options,
  })
}
