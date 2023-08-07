import * as yup from "yup";

export const FormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo 5 caracteres")
    .max(32, "Máximo 32 caracteres"),
});

export const FormForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
});
