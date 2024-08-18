import * as yup from "yup"

export const loginFormSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(8),
})
