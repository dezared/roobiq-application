import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import TextInput from '../components/controls/TextInput';
import Button from '../components/controls/Button';
import { registrationValidationSchema } from '../configs/validations';
import { useHistory } from 'react-router-dom';

import AuthService from '../utils/auth/AuthorizationService';
import FormApiValidator from '../utils/forms/FormApiValidator'

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  margin-bottom: 20px;
  width: 100%;
  max-width: 200px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #2E3135;
  margin-bottom: 20px;
  white-space: nowrap;
`;

const LoginInput = styled(TextInput)`
  width: 100%;
`;

const PasswordInput = styled(TextInput)`
  width: 100%;
  &.MuiTextField-root {
    margin-top: 28px;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 36px;
  justify-content: space-between;
  align-items: center;
`;

const RegistrationBtn = styled(Button)`
  &.MuiButton-root {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

function Login() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: registrationValidationSchema,
    onSubmit: (values, actions) => {
      AuthService.register(values.email, values.password, values.passwordConfirmation).then(
        (response) => {
          localStorage.setItem("userAuthorizationToken", JSON.stringify(response.data));
          history.push("/");
          window.location.reload();
          return Promise.resolve();
        },
        (error) => {
          FormApiValidator(error, actions)
          return Promise.reject();
        }
      );
    }
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Logo className="splash_logotype" src="/images/splash_logotype.png" alt="Roobiq Logo" />
        <Title>
          Регистрация
        </Title>

        <LoginInput
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          placeholder="Email"
        />
        <PasswordInput
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          placeholder="Пароль"
        />
        <PasswordInput
          type="password"
          name="passwordConfirmation"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
          placeholder="Повторите пароль"
        />

        <ButtonGroup>
          <RegistrationBtn type="submit">Зарегистрироваться</RegistrationBtn>
          <Button component={Link} variant="text" to="/login">У меня уже есть аккаунт</Button>
        </ButtonGroup>
      </Form>
    </Wrap>
  );
}

export default Login;
