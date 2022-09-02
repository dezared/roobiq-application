import * as Yup from 'yup';

const requiredMsg = 'Обязательное поле';
const emailMsg = 'Неверный формат email';
const passwordMsg = 'Минимум 6 символов, одна буква и одна цифра';
const passwordConfirmationMsg = 'Пароли должны совпадать';
const minSymbolsMsg = (min) => `Минимальное количество символов - ${min}`;

// eslint-disable-next-line import/prefer-default-export
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email(emailMsg).required(requiredMsg),
  password: Yup.string()
    .min(6, minSymbolsMsg(6))
    .required(requiredMsg),
});

export const registrationValidationSchema = Yup.object().shape({
  email: Yup.string().email(emailMsg).required(requiredMsg),
  password: Yup.string()
    .required(requiredMsg)
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/,
      passwordMsg,
    ),
  passwordConfirmation: Yup.string()
    .required(requiredMsg)
    .oneOf([Yup.ref('password'), null], passwordConfirmationMsg),
});
