import type { IUser } from "@/interfaces"

export const useLoginUser = () => {
  const loginUser = useState<IUser | null>("login-user", () => {
    return null
  })

  const setLoginUser = (user: IUser | null) => {
    loginUser.value = user
  }

  return {
    loginUser,
    setLoginUser,
  }
}
