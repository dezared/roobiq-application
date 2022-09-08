import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import logoStartPage from '../images/splash_logotype.png';
import TextInput from '../components/controls/TextInput';
import Button from '../components/controls/Button';
import { loginValidationSchema } from '../configs/validations';

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
  margin-bottom: 24px;
  width: 100%;
  max-width: 250px;
`;

const CompanyName = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #2E3135;
  align-self: flex-start;
  margin-bottom: 12px;
  white-space: nowrap;
`;

const CompanyNameEnd = styled.span`
  color: #345CCE;
`;

const CompanyText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8B8F94;
  align-self: flex-start;
  margin-bottom: 24px;
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
  gap: 20px;
  margin-top: 36px;
  justify-content: space-between;
  align-items: center;
`;

const LoginBtn = styled(Button)`
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
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values, actions) => {
      actions.setStatus(undefined);
      AuthService.login(values.email, values.password).then(
        (response) => {
          localStorage.setItem("userAuthorizationToken", JSON.stringify(response.data));
          history.push("/");
          document.location.reload();
          return Promise.resolve();
        },
        (error) => {
          FormApiValidator(error, actions)
          return Promise.reject();
        }
      );
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Logo className="splash_logotype" src={logoStartPage} alt="Roobiq Logo" />
        <CompanyName>
          ROOB
          <CompanyNameEnd>IQ</CompanyNameEnd>
        </CompanyName>
        <CompanyText>Конструктор презентаций с расчётом экономических показателей</CompanyText>

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

        <ButtonGroup>
          <Button component={Link} variant="text" to="/registration">Создать аккаунт</Button>
          <LoginBtn type="submit">Войти</LoginBtn>
        </ButtonGroup>
      </Form>
    </Wrap>
  );
}

export default Login;
