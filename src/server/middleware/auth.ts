export default defineEventHandler((event) => {
  const url = event.node.req.url as string

  // /api以外のurlの場合、return
  if (!url.startsWith("/api")) {
    return
  }

  const ignoreUrls = ["/api/auth/login", "/api/auth/logout"]

  if (ignoreUrls.includes(url)) {
    return
  }

  const token = getCookie(event, "token")

  if (!token) {
    throw createError({
      statusCode: 401,
      message: "認証エラー",
    })
  }

  try {
    const payload = verifyToken(token)
    event.context.user = payload
  }
  catch (error) {
    deleteCookie(event, "token")
    console.log("token認証エラー内容")
    console.error(error)
    throw createError({
      statusCode: 401,
      statusMessage: "ログインセッションが切れました。再度ログインしてください。",
    })
  }
})
