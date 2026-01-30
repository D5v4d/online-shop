import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .required("Имя пользователя обязательно")
    .min(3, "Минимум 3 символа"),

  password: yup
    .string()
    .required("Пароль обязателен")
    .min(3, "Минимум 3 символа"),
});
