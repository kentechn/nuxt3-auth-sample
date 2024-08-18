import type { ILoginFormData, IUser } from "@/interfaces"
import { generateToken } from "@/server/utils/jwt"

export default defineEventHandler(async (event) => {
  const { username, password }: ILoginFormData = await readBody(event)
  console.log("username, password formdata:")
  console.log(username, password)

  const date = new Date()
  const user: IUser = {
    id: "12345",
    username,
    email: "test@test.com",
    isAdmin: true,
    createdAt: date,
    updatedAt: date,
  }

  const token = generateToken(user.username)

  setCookie(event, "token", token, {
    maxAge: 60 * 60 * 24 * 1000 * 7,
  })

  return user
})
