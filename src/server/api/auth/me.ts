import type { IUser } from "@/interfaces"

export default defineEventHandler(async (event) => {
  // if (!event.context.user) {
  //   throw createError({
  //     statusCode: 401,
  //     message: "Unauthorized",
  //   })
  // }

  console.log("event.context.user:")
  console.log(event.context.user)

  const username: string = event.context.user.username ?? ""

  if (!username) {
    console.log("tokenからusernameが取得できませんでした")
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    })
  }

  const date = new Date()
  const user: IUser = {
    id: "12345",
    username,
    email: "test@test.com",
    isAdmin: true,
    createdAt: date,
    updatedAt: date,
  }

  return user
})
