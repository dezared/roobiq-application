/* eslint-disable */
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Divider,
  IconButton, Modal, TextareaAutosize, TextField,
} from '@mui/material';
import {
  ErrorMessage, FieldArray, FormikProvider, useFormik,
} from 'formik';
import * as Yup from 'yup';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextInput from '../../controls/TextInput';
import Button from '../../controls/Button';
import ErrorBlock from '../../controls/ErrorBlock';
import { ActionType } from '../../../configs/constants';
import TextArrayActionBlockForm from './TextArrayActionBlockForm';

const Wrap = styled.div`
  width: 100%;
`;

const Btn = styled(Button)`
  width: 100%;
`;

const Popup = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  
  & .MuiBackdrop-root {
    background: #F8F8F8;
  }
`;

const Form = styled(FormikProvider)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
`;

const ContentWrap = styled.div`
  width: 100vw;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: calc(100vh - 144px);
  overflow-x: auto;
`;

const Content = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Header = styled.div`
  width: 100%;
  height: 64px;
  max-width: 450px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
`;

const BackIcon = styled(ArrowBackIosNewIcon)`
  width: 16px;
  height: 16px;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2E3135;
`;

const Description = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2E3135;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemName = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IconButtonWrap = styled(IconButton)`
  display: flex;
  align-self: flex-start;
  height: 48px;
`;

const RawWrap = styled.div`
  display: flex;
  gap: 16px;
`;

const TextArea = styled(TextInput)`
  flex: 1;
`;

const DividerGrey = styled(Divider)`
  &.MuiDivider-root {
    width: 100%;
    border-color: #F8F8F8;
  }
`;

const DeleteIcon = styled(DeleteOutlineIcon)`
  color: #ff1744;
  &.MuiDivider-root {
    width: 100%;
    border-color: #F8F8F8;
  }
`;

const SaveBtn = styled(Button)`
  &.MuiButtonBase-root {
    width: calc(100% - (16px * 2));
    position: fixed;
    bottom: 16px;
    max-width: 450px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const getDefaultValueByType = (type) => {
  switch (type) {
    case ActionType.text:
      return '';
    case ActionType.textArrayForm:
      return [];
    default:
      throw new Error(`Action type "${type}" does not exists`);
  }
};

const getEmptyObject = (objectFields) => objectFields.reduce((previousValue, currentValue) => ({
  ...previousValue,
  [currentValue.name]: getDefaultValueByType(currentValue.type),
}), {});

const getValidationSchemaByType = (type) => {
  switch (type) {
    case ActionType.text:
      return Yup.string();
    case ActionType.textArrayForm:
      return Yup.array();
    default:
      throw new Error(`Action type "${type}" does not exists`);
  }
};

const getValidationSchema = (objectFields) => {
  const schemeFields = objectFields.reduce((previousValue, currentValue) => ({
    ...previousValue,
    [currentValue.name]: getValidationSchemaByType(currentValue.type).required('Обязательное поле'),
  }), {});

  return Yup.object().shape({
    item: Yup.object().shape(schemeFields),
  });
};

function FieldComponent({formik, fieldName, placeholder, type, actionName, onChange, payload, index}) {
  switch (type) {
    case ActionType.text:
      return (
        <InputWrap>
          <TextArea
            multiline
            InputProps={{
              maxRows: 4,
            }}
            placeholder={placeholder}
            name={`item.${fieldName}`}
            value={formik.values.item[fieldName]}
            onChange={formik.handleChange}
          />
          <ErrorBlock name={`item.${fieldName}`} />
        </InputWrap>
      );
    case ActionType.textArrayForm:
      return (
        <TextArrayActionBlockForm
          formikParent={formik}
          payload={payload}
          onChange={onChange}
          actionName={actionName}
          fieldIdParent={index}>
        </TextArrayActionBlockForm>
      )
    default:
      throw new Error(`Action type "${type}" does not exists`);
  }
}

function ObjectActionBlock({
  actionName, onChange, payload,
}) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      item: getEmptyObject(payload.objectFields),
    },
    validationSchema: getValidationSchema(payload.objectFields),
    onSubmit: (values) => {
      onChange({ [actionName]: values.item });
      formik.resetForm();
      handleClose();
    },
  });

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  return (
    <Wrap>
      <Btn onClick={handleOpen}>{payload.btnText}</Btn>
      <Popup
        open={open}
      >
        <Form value={formik}>
          <Header>
            <IconButton size="small" onClick={handleClose}>
              <BackIcon fontSize="small" />
            </IconButton>
            <Title>{payload.title}</Title>
          </Header>
          <ContentWrap>
            <Content>
              <Description>{payload.description}</Description>
              <ItemWrap>
                  <Item>
                    <ItemName>
                      {payload.itemName}
                    </ItemName>
                    <RawWrap>
                      <InputWrap>
                        {payload.objectFields.map((field) => (
                          <FieldComponent
                            formik={formik}
                            key={field.name}
                            fieldName={field.name}
                            placeholder={field.placeholder}
                            type={field.type}
                            actionName={actionName}
                            onChange={onChange}
                            payload={field.payload}
                            index={0}
                          />
                        ))}
                      </InputWrap>
                    </RawWrap>
                  </Item>
              </ItemWrap>
            </Content>
          </ContentWrap>

          <SaveBtn type="submit" onClick={onSubmit}>Сохранить</SaveBtn>
        </Form>
      </Popup>
    </Wrap>
  );
}

export default ObjectActionBlock;
