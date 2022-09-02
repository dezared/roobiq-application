/* eslint-disable no-unused-vars,react/prop-types */
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Backdrop, IconButton,
} from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { rgba } from 'polished';
import TextInput from '../../controls/TextInput';
import Button from '../../controls/Button';
import Checkbox from '../../controls/Checkbox';
import ErrorBlock from '../../controls/ErrorBlock';

const Form = styled(FormikProvider)`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;

const Textarea = styled(TextInput)`
  &.MuiTextField-root {
    flex: 1;
    margin-right: 8px;
  }
`;

const SaveButton = styled(Button)`
  width: 100%;
  &.MuiButtonBase-root {
    margin-top: 16px;
  }
`;

const BlackBackground = styled(Backdrop)`
  &.MuiBackdrop-root {
    background: ${rgba('#2E3135', 0.8)};
    padding: 16px;
  }
`;

const Panel = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 16px;
  background: #FFFFFF;
  align-self: flex-end;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2E3135;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxWrap = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CheckboxLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2E3135;
`;

const CheckboxDescription = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #838285;
`;

const ActionButton = styled(Button)`
  width: 100%;
`;

const OwnOptionTextInput = styled(TextInput)`
  width: 100%;
  
  &.MuiTextField-root {
    margin-bottom: 16px;
  }
`;

// eslint-disable-next-line react/prop-types
function SelectMultipleActionBlock({ actionName, onChange, payload }) {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const formik = useFormik({
    initialValues: {
      item: '',
    },
    validationSchema: Yup.object().shape({
      item: Yup.string().required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      onChange({ [actionName]: values.item });
      formik.resetForm();
      onClose();
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  const handleChange = useCallback((e, value) => {
    formik.setFieldValue('item', value);
  }, [formik]);

  return (
    <Form value={formik}>
      <Container>
        <ActionButton onClick={onOpen}>{payload.btnText}</ActionButton>
      </Container>

      <BlackBackground
        open={open}
      >
        <Panel>
          <Header>
            <Title>{payload.title}</Title>
            <IconButton size="small" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 5.25L18.75 18.75" stroke="#2E3135" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.75 5.25L5.25 18.75" stroke="#2E3135" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </IconButton>
          </Header>
          <Content>
            {payload.options.map((option) => (
              <CheckboxWrap key={option.title}>
                <Checkbox
                  checkedIcon={(
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="6" stroke="#345CCE" strokeWidth="4" />
                    </svg>
                  )}
                  icon={(
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="7.5" stroke="#8B8F94" />
                    </svg>
                  )}
                  checked={formik.values.item === option.title}
                  onChange={(e) => handleChange(e, option.title)}
                />
                <CheckboxLabel>
                  <CheckboxTitle>{option.title}</CheckboxTitle>
                  <CheckboxDescription>{option.description}</CheckboxDescription>
                </CheckboxLabel>
              </CheckboxWrap>
            ))}
          </Content>

          <ErrorBlock value={formik.values.item} type="input" name="item" />

          <SaveButton type="submit" onClick={onSubmit}>Сохранить</SaveButton>
        </Panel>
      </BlackBackground>
    </Form>
  );
}

export default SelectMultipleActionBlock;
