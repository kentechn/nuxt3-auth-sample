import type { NitroFetchOptions, NitroFetchRequest } from "nitropack"
import type { AsyncDataOptions } from "nuxt/app"

export function useMyFetch<T>(
  url: string,
  options: NitroFetchOptions<NitroFetchRequest> = {},
  asyncDataOptions: AsyncDataOptions<T> = {},
) {
  return useAsyncData<T>(url, async () => {
    return await useNuxtApp().$myFetch(url, {
      ...options,
    })
  }, {
    ...asyncDataOptions,
  })
}
