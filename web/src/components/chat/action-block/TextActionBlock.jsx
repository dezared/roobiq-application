/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { IconButton, TextareaAutosize, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../controls/TextInput';
import { loginValidationSchema } from '../../../configs/validations';

const Form = styled.form`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Textarea = styled(TextInput)`
  &.MuiTextField-root {
    flex: 1;
    margin-right: 8px;
  }
`;

const SendBtn = styled(IconButton)`
  align-self: flex-end;
  
  &.MuiIconButton-root {
    padding: 0;
    color: #FFFFFF;
  }
`;

const Circle = styled.div`
  background: #345CCE;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const ErrorPanel = styled.div`
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  padding: 6px 16px;
  color: #ff1744;
`;

// eslint-disable-next-line react/prop-types
function TextActionBlock({ actionName, onChange }) {
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object().shape({
      text: Yup.string().required('Обязательное поле').max(160, 'Максимум 160 символов'),
    }),
    onSubmit: (values) => {
      onChange({ [actionName]: values.text });
      formik.resetForm();
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      formik.handleSubmit();
    }
  }, [formik]);

  return (
    <Form onSubmit={onSubmit} onKeyDown={onKeyDown}>
      <Container>
        <Textarea
          placeholder="Ваш ответ"
          multiline
          InputProps={{
            maxRows: 4,
          }}
          name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
        />

        <SendBtn type="submit">
          <Circle>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.93917 12.6463L7.69193 11.8972L7.69192 11.8972L7.69192 11.8972C5.33871 11.1128 4.16211 10.7206 4.16211 9.99985C4.16211 9.27909 5.33872 8.88689 7.69193 8.10249L16.2051 5.26476C17.8609 4.71283 18.6888 4.43687 19.1258 4.87388C19.5628 5.3109 19.2869 6.1388 18.7349 7.79459L15.8972 16.3078L15.8972 16.3078L15.8972 16.3078C15.1128 18.661 14.7206 19.8376 13.9998 19.8376C13.2791 19.8376 12.8869 18.661 12.1025 16.3078L11.3534 14.0605L15.7069 9.70696C16.0975 9.31643 16.0975 8.68327 15.7069 8.29275C15.3164 7.90222 14.6832 7.90222 14.2927 8.29275L9.93917 12.6463Z" fill="white" />
            </svg>
          </Circle>
        </SendBtn>
      </Container>
      <ErrorPanel>
        {formik.touched.text && Boolean(formik.errors.text)
          ? formik.touched.text && formik.errors.text
          : null}
      </ErrorPanel>
    </Form>
  );
}

export default TextActionBlock;
