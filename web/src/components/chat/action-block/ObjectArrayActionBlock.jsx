/* eslint-disable */
import React, {useCallback, useMemo, useState} from 'react';
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
import Checkbox from "../../controls/Checkbox";
import {Image} from "@mui/icons-material";
import ImagePicker from "../../controls/ImagePicker";
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

const CheckboxesWrap = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
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


const getDefaultValueByType = (type) => {
  switch (type) {
    case ActionType.text:
      return '';
    case ActionType.checkboxArray:
      return [];
    case ActionType.image:
      return null;
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
    case ActionType.checkboxArray:
      return Yup.array();
    case ActionType.textArrayForm:
      return Yup.array();
    case ActionType.image:
      return Yup.string();
      break;
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
    items: Yup.array()
      .of(
        Yup.object().shape(schemeFields),
      )
      .min(1)
      .required('Обязательное поле')
  });
};

function FieldComponent({formik, fieldName, placeholder, type, index, sourceField, answers, payload, onChange, actionName}) {
  const handleChange = useCallback((e, value) => {
    const arr = [...formik.values.items[index][fieldName]];
    if (e.target.checked) {
      arr.push(value);
    } else {
      arr.splice(arr.indexOf(value), 1);
    }

    formik.setFieldValue(`items.${index}.${fieldName}`, arr);
  }, [formik]);

  const onDelete = () => {
    formik.setFieldValue(`items.${index}.${fieldName}`, undefined);
  };

  const onChangeFile = (newFile) => {
    formik.setFieldValue(`items.${index}.${fieldName}`, newFile);
  };

  const fileUrl = useMemo(() => {
    const file = formik.values.items[index][fieldName];

    if (!file || type !== ActionType.image) return null;

    if (typeof file === 'object') {
      return URL.createObjectURL(file);
    }

    return file;
  }, [formik.values.items[index][fieldName]]);

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
            name={`items.${index}.${fieldName}`}
            value={formik.values.items[index][fieldName]}
            onChange={formik.handleChange}
          />
          <ErrorBlock name={`items.${index}.${fieldName}`} />
        </InputWrap>
      );
    case ActionType.image:
      return (
        <InputWrap>
          <ImagePicker file={fileUrl} onChangeFile={onChangeFile} onDelete={onDelete} />
          <ErrorBlock name={`items.${index}.${fieldName}`} />
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
    case ActionType.checkboxArray:
      return (
        <CheckboxesWrap>
            {answers.find(m => m[sourceField])[sourceField].map((option) => (
              <CheckboxWrap key={option}>
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
                  checked={formik.values.items[index][fieldName].includes(option)}
                  onChange={(e) => handleChange(e, option)}
                />
                <CheckboxLabel>
                  <CheckboxTitle>{option}</CheckboxTitle>
                </CheckboxLabel>
              </CheckboxWrap>
            ))}
        </CheckboxesWrap>
      );
    default:
      throw new Error(`Action type "${type}" does not exists`);
  }
}

function ObjectArrayActionBlock({
  actionName, onChange, payload, answers,
}) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      items: new Array(payload.minElements || 1).fill(getEmptyObject(payload.objectFields)),
    },
    validationSchema: getValidationSchema(payload.objectFields),
    onSubmit: (values) => {
      onChange({ [actionName]: values.items });
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
            <FieldArray
              name="items"
              render={(arrayHelpers) => (
                <>
                  <Content>
                    <Description>{payload.description}</Description>
                    <ItemWrap>
                      {formik.values.items.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Item key={index}>
                          <ItemName>
                            {payload.itemName}
                            {' '}
                            {index + 1}

                          </ItemName>
                          <RawWrap>
                            <InputWrap>
                              {payload.objectFields.map((field) => (
                                <FieldComponent
                                  key={field.name}
                                  formik={formik}
                                  index={index}
                                  fieldName={field.name}
                                  placeholder={field.placeholder}
                                  sourceField={field.sourceField}
                                  type={field.type}
                                  answers={answers}
                                  payload={field.payload}
                                  onChange={onChange}
                                  actionName={actionName}
                                />
                              ))}
                            </InputWrap>

                            {formik.values.items.length > 1 && payload.deletable !== false ? (
                              <IconButtonWrap onClick={() => arrayHelpers.remove(index)}>
                                <DeleteIcon />
                              </IconButtonWrap>
                            ) : null}
                          </RawWrap>
                        </Item>
                      ))}
                    </ItemWrap>
                  </Content>

                  {payload.addable !== false ? (
                    <>
                      <DividerGrey />

                      <ButtonWrap>
                        <Button color="secondary" onClick={() => arrayHelpers.push(getEmptyObject(payload.objectFields))}>Добавить пункт</Button>
                      </ButtonWrap>
                    </>
                  ) : null}
                </>
              )}
            />
          </ContentWrap>

          <SaveBtn type="submit" onClick={onSubmit}>Сохранить</SaveBtn>
        </Form>
      </Popup>
    </Wrap>
  );
}

export default ObjectArrayActionBlock;
