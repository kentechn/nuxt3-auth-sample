import { useLoginUser } from "./states/useLoginUser"
import type { ILoginFormData, IUser } from "@/interfaces"
// import type { loginFormSchema } from "@/schemas"

export const useMyAuth = () => {
  const { setLoginUser, loginUser } = useLoginUser()

  // const { data: user, status, execute, error } = useMyFetch<IUser>(
  //   "/auth/login",
  //   {
  //     method: "POST",
  //     body: loginFormData,
  //   },
  //   {
  //     immediate: false,
  //   },
  // )

  const app = useNuxtApp()

  const login = async (formVal: ILoginFormData) => {
    try {
      const user = await app.$myFetch<IUser>("/auth/login", {
        method: "POST",
        body: formVal,
      })
      setLoginUser(user)
      await navigateTo("/")
    }
    catch (e) {
      console.error(e)
    }
  }

  const logout = async () => {
    setLoginUser(null)
    clearNuxtData("/auth/login")
    await useMyFetch("/auth/logout")
  }

  const getMe = async () => {
    const token = useCookie("token").value
    try {
      if (!token) {
        setLoginUser(null)
        return
      }
      const user = await $fetch<IUser>("/api/auth/me", {
        headers: useRequestHeaders(["cookie"]),
      })

      if (user) {
        setLoginUser(user)
      }
    }
    catch (e) {
      console.log("tokenエラー：")
      setLoginUser(null)
    }
  }

  return {
    loginUser,
    setLoginUser,
    login,
    logout,
    getMe,
  }
}
