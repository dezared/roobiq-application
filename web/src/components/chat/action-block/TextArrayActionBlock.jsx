/* eslint-disable no-unused-vars,react/prop-types */
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
  align-items: center;
  gap: 16px;
  width: 100%;
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

Yup.addMethod(Yup.array, 'unique', function (message, mapper = (a) => a) {
  return this.test('unique', message, (list) => list.length === new Set(list.map(mapper)).size);
});

function TextArrayActionBlock({ actionName, onChange, payload }) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      items: new Array(payload.minElements || 1).fill(''),
    },
    validationSchema: Yup.object().shape({
      items: Yup
        .array()
        .of(Yup.string().required('Обязательное поле'))
        .unique('Поля не должны быть одинаковыми')
        .min(1)
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      onChange({ [actionName]: values.items });
      formik.resetForm();
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
                          <div>
                            <InputWrap>
                              <TextArea
                                multiline
                                InputProps={{
                                  maxRows: 4,
                                }}
                                placeholder="Печатать тут"
                                name={`items.${index}`}
                                value={formik.values.items[index]}
                                onChange={formik.handleChange}
                              />
                              {formik.values.items.length > 1 ? (
                                <IconButton onClick={() => arrayHelpers.remove(index)}>
                                  <DeleteIcon />
                                </IconButton>
                              ) : null}
                            </InputWrap>
                            <ErrorBlock value={formik.errors.items} name={`items.${index}`} />
                          </div>
                        </Item>
                      ))}
                    </ItemWrap>
                  </Content>

                  <DividerGrey />
                  <ErrorBlock value={formik.errors.items} type="form" name="items" />

                  <ButtonWrap>
                    <Button color="secondary" onClick={() => arrayHelpers.push('')}>Добавить пункт</Button>
                  </ButtonWrap>
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

export default TextArrayActionBlock;
