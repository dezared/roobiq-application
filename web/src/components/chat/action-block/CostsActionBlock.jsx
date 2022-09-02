import React, { Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Divider,
  IconButton, Modal,
} from '@mui/material';
import {
  FieldArray,
  FormikProvider, useFormik,
} from 'formik';
import * as Yup from 'yup';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { rgba } from 'polished';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextInput from '../../controls/TextInput';
import Button from '../../controls/Button';
import ErrorBlock from '../../controls/ErrorBlock';
import Autocomplete from '../../controls/Autocomplete';

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

const Container = styled.div`
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
  height: calc(100vh - 157px);
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
  margin-bottom: 32px;
`;

const FieldsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => (props.checked ? '#E6EBF9' : '#F8F8F8')};
  border-radius: 16px;
  padding: 12px 16px;
  cursor: pointer;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2E3135;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: ${(props) => (props.checked ? rgba('#d2d8ea', 0.85) : '#f0f0f0')};
  }
`;

const ItemName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;

  color: #2E3135;
`;

const DeleteIcon = styled(DeleteOutlineIcon)`
  color: #ff1744;
  &.MuiDivider-root {
    width: 100%;
    border-color: #F8F8F8;
  }
`;

const IconButtonWrap = styled(IconButton)`
  display: flex;
  align-self: flex-start;
  height: 48px;
  width: 48px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
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

const DividerGrey = styled(Divider)`
  &.MuiDivider-root {
    width: 100%;
    border-color: #F8F8F8;
    margin-bottom: 32px;
  }
`;

const ErrorPanel = styled.span`
  font-size: 14px;
  line-height: 16px;
  height: 28px;
  padding: 6px 16px;
  color: #ff1744;
  display: block;
`;

function TeamBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: data || {
      admin: {
        position: '',
        cost: '',
      },
      operating: {
        position: '',
        cost: '',
      },
      others: [],
    },
    validationSchema: Yup.object().shape({
      admin: Yup.object().shape({
        position: Yup.string()
          .required('Обязательное поле'),
        cost: Yup.number()
          .typeError('Нужно ввести число')
          .required('Обязательное поле'),
      }),
      operating: Yup.object().shape({
        position: Yup.string()
          .required('Обязательное поле'),
        cost: Yup.number()
          .typeError('Нужно ввести число')
          .required('Обязательное поле'),
      }),
      others: Yup
        .array()
        .of(
          Yup.object().shape({
            name: Yup.string()
              .required('Обязательное поле'),
            position: Yup.string()
              .required('Обязательное поле'),
            cost: Yup.number()
              .typeError('Нужно ввести число')
              .required('Обязательное поле'),
          }),
        ),
    }),
    onSubmit: (values) => {
      onChange({ team: values });
      formik.resetForm();
      onClose();
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  return (
    <FormikProvider value={formik}>
      <Header>
        <IconButton size="small" onClick={onClose}>
          <BackIcon fontSize="small" />
        </IconButton>
        <Title>Команда</Title>
      </Header>
      <ContentWrap>
        <Content>
          <FieldGroup>
            <ItemName>Команда администрирования</ItemName>

            <FieldsWrap>
              <TextInput
                placeholder="Должность"
                name="admin.position"
                value={formik.values.admin.position}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="admin.position" />
            </FieldsWrap>
            <FieldsWrap>
              <TextInput
                placeholder="Денежное поощрение в месяц"
                name="admin.cost"
                value={formik.values.admin.cost}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="admin.cost" />
            </FieldsWrap>
          </FieldGroup>

          <FieldGroup>
            <ItemName>Операционная команда</ItemName>
            <FieldsWrap>
              <TextInput
                placeholder="Должность"
                name="operating.position"
                value={formik.values.operating.position}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="operating.position" />
            </FieldsWrap>

            <FieldsWrap>
              <TextInput
                placeholder="Денежное поощрение в месяц"
                name="operating.cost"
                value={formik.values.operating.cost}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="operating.cost" />
            </FieldsWrap>
          </FieldGroup>

          <DividerGrey />

          <FieldArray
            name="others"
            render={(arrayHelpers) => (
              <>
                {formik.values.others.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Row key={index}>
                    <FieldGroup>
                      <FieldsWrap>
                        <TextInput
                          placeholder="Название команды"
                          name={`others.${index}.name`}
                          value={formik.values.others[index].name}
                          onChange={formik.handleChange}
                        />
                        <ErrorBlock name={`others.${index}.name`} />
                      </FieldsWrap>

                      <FieldsWrap>
                        <TextInput
                          placeholder="Должность"
                          name={`others.${index}.position`}
                          value={formik.values.others[index].position}
                          onChange={formik.handleChange}
                        />
                        <ErrorBlock name={`others.${index}.position`} />
                      </FieldsWrap>

                      <FieldsWrap>
                        <TextInput
                          placeholder="Денежное поощрение в месяц"
                          name={`others.${index}.cost`}
                          value={formik.values.others[index].cost}
                          onChange={formik.handleChange}
                        />
                        <ErrorBlock name={`others.${index}.cost`} />
                      </FieldsWrap>
                    </FieldGroup>

                    <IconButtonWrap onClick={() => arrayHelpers.remove(index)}>
                      <DeleteIcon />
                    </IconButtonWrap>
                  </Row>
                ))}

                <Button color="secondary" onClick={() => arrayHelpers.push({ name: '', position: '', cost: '' })}>
                  Добавить статью расхода
                </Button>
              </>
            )}
          />
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function InfrastructureBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: {
      items: data || [{ expenditure: '', cost: '' }],
    },
    validationSchema: Yup.object().shape({
      items: Yup
        .array()
        .of(
          Yup.object().shape({
            expenditure: Yup.string()
              .required('Обязательное поле'),
            cost: Yup.number()
              .typeError('Нужно ввести число')
              .required('Обязательное поле'),
          }),
        ),
    }),
    onSubmit: (values) => {
      onChange({ infrastructure: values.items });
      formik.resetForm();
      onClose();
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  const onChangeExpenditure = (index) => (_, val) => {
    formik.setFieldValue(`items.${index}.expenditure`, val);
  };

  return (
    <FormikProvider value={formik}>
      <Header>
        <IconButton size="small" onClick={onClose}>
          <BackIcon fontSize="small" />
        </IconButton>
        <Title>Инфраструктура</Title>
      </Header>
      <ContentWrap>
        <Content>
          <ItemName>
            {/* eslint-disable-next-line max-len */}
            Инфраструктура: огранизационные расходы (все, на что тратится для организации работы без рекламы)
          </ItemName>

          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <>
                {formik.values.items.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Row key={index}>
                    <FieldGroup>
                      <FieldsWrap>
                        <Autocomplete
                          freeSolo
                          options={[
                            'Помещение/офис',
                            'Коммуникации (свет/тепло/вода)',
                            'Интернет', 'Орг. Софт (таск менеджеры, CRM и пр)',
                            'Производственный софт',
                            'Исследования',
                            'Сайт',
                            'Серверы',
                          ]}
                          getOptionLabel={(option) => option}
                          placeholder="Статья расхода"
                          inputValue={formik.values.items[index].expenditure}
                          onInputChange={onChangeExpenditure(index)}
                        />
                        <ErrorBlock name={`items.${index}.expenditure`} />
                      </FieldsWrap>

                      <FieldsWrap>
                        <TextInput
                          placeholder="Денежное поощрение в месяц"
                          name={`items.${index}.cost`}
                          value={formik.values.items[index].cost}
                          onChange={formik.handleChange}
                        />
                        <ErrorBlock name={`items.${index}.cost`} />
                      </FieldsWrap>
                    </FieldGroup>
                    {formik.values.items.length > 1 ? (
                      <IconButtonWrap onClick={() => arrayHelpers.remove(index)}>
                        <DeleteIcon />
                      </IconButtonWrap>
                    ) : null}
                  </Row>
                ))}

                <Button color="secondary" onClick={() => arrayHelpers.push({ expenditure: '', cost: '' })}>
                  Добавить статью расхода
                </Button>
              </>
            )}
          />
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function PromotionChannelsBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: {
      items: data || [{
        expenditure: '', cost: '', conversion: '', commission: '',
      }],
    },
    validationSchema: Yup.object().shape({
      items: Yup
        .array()
        .of(
          Yup.object().shape({
            expenditure: Yup.string()
              .required('Обязательное поле'),
            cost: Yup.number()
              .typeError('Нужно ввести число')
              .required('Обязательное поле'),
            conversion: Yup.number()
              .typeError('Нужно ввести число')
              .required('Обязательное поле'),
            commission: Yup.number()
              .typeError('Нужно ввести число')
              .required('Обязательное поле'),
          }),
        ),
    }),
    onSubmit: (values) => {
      onChange({ promotion_channels: values.items });
      formik.resetForm();
      onClose();
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  const onChangeExpenditure = (index) => (_, val) => {
    formik.setFieldValue(`items.${index}.expenditure`, val);
  };

  return (
    <FormikProvider value={formik}>
      <Header>
        <IconButton size="small" onClick={onClose}>
          <BackIcon fontSize="small" />
        </IconButton>
        <Title>Каналы продвижения</Title>
      </Header>
      <ContentWrap>
        <Content>

          <FieldArray
            name="items"
            render={(arrayHelpers) => (
              <>
                {formik.values.items.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={index}>
                    <ItemName>
                      Канал продвижения
                      {' '}
                      {index + 1}
                    </ItemName>
                    <Row>
                      <FieldGroup>
                        <FieldsWrap>
                          <Autocomplete
                            freeSolo
                            options={[
                              'Таргет',
                              'Контекст',
                              'Закупка у лидеров мнений',
                            ]}
                            getOptionLabel={(option) => option}
                            placeholder="Статья расхода на рекламу"
                            inputValue={formik.values.items[index].expenditure}
                            onInputChange={onChangeExpenditure(index)}
                          />
                          <ErrorBlock name={`items.${index}.expenditure`} />
                        </FieldsWrap>

                        <FieldsWrap>
                          <TextInput
                            placeholder="Расходы"
                            name={`items.${index}.cost`}
                            value={formik.values.items[index].cost}
                            onChange={formik.handleChange}
                          />
                          <ErrorBlock name={`items.${index}.cost`} />
                        </FieldsWrap>

                        <FieldsWrap>
                          <TextInput
                            placeholder="Конверсия в %"
                            name={`items.${index}.conversion`}
                            value={formik.values.items[index].conversion}
                            onChange={formik.handleChange}
                          />
                          <ErrorBlock name={`items.${index}.conversion`} />
                        </FieldsWrap>

                        <FieldsWrap>
                          <TextInput
                            placeholder="Комисия (Apple, Google - 30%, 15%, 0)"
                            name={`items.${index}.commission`}
                            value={formik.values.items[index].commission}
                            onChange={formik.handleChange}
                          />
                          <ErrorBlock name={`items.${index}.commission`} />
                        </FieldsWrap>
                      </FieldGroup>
                      {formik.values.items.length > 1 ? (
                        <IconButtonWrap onClick={() => arrayHelpers.remove(index)}>
                          <DeleteIcon />
                        </IconButtonWrap>
                      ) : null}
                    </Row>
                  </Fragment>
                  // eslint-disable-next-line react/no-array-index-key
                ))}

                <Button color="secondary" onClick={() => arrayHelpers.push({ expenditure: '', cost: '' })}>
                  Добавить канал продвижения
                </Button>
              </>
            )}
          />
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function OthersBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: data || {
      name: '',
      description: '',
      cost: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Обязательное поле'),
      description: Yup.string()
        .required('Обязательное поле'),
      cost: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      onChange(values);
      formik.resetForm();
      onClose();
    },
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    formik.handleSubmit();
  }, [formik]);

  return (
    <FormikProvider value={formik}>
      <Header>
        <IconButton size="small" onClick={onClose}>
          <BackIcon fontSize="small" />
        </IconButton>
        <Title>Дополнительные расходы</Title>
      </Header>
      <ContentWrap>
        <Content>
          <FieldGroup>
            <FieldsWrap>
              <TextInput
                placeholder="Название"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="name" />
            </FieldsWrap>
            <FieldsWrap>
              <TextInput
                placeholder="Описание"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="description" />
            </FieldsWrap>
            <FieldsWrap>
              <TextInput
                placeholder="Денежное поощрение в месяц"
                name="cost"
                value={formik.values.cost}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="cost" />
            </FieldsWrap>
          </FieldGroup>
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function CostsActionBlock({
  // eslint-disable-next-line no-unused-vars
  actionName, onChange,
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    team: null, infrastructure: null, promotion_channels: null, others: [],
  });
  const [error, setError] = useState(false);
  const [block, setBlock] = useState(null);
  const [othersIndex, setOthersIndex] = useState(null);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const changeBlock = (blockName) => () => {
    setBlock(blockName);
    setError(false);
  };

  const onChangeData = (partData) => {
    setData({ ...data, ...partData });
  };

  const editOthersBlock = (index) => () => {
    setOthersIndex(index);
    setBlock('others');
  };

  const onChangeOthers = (partData) => {
    if (othersIndex) {
      const newData = { ...data };
      newData.others[othersIndex] = partData;
    } else {
      setData({ ...data, others: [...data.others, partData] });
    }
  };

  const onSave = useCallback(() => {
    if (!data.team || !data.infrastructure || !data.promotion_channels) {
      setError(true);
      return;
    }

    onChange({ [actionName]: data });
    handleClose();
  }, [handleClose, onChange, data, actionName]);

  return (
    <Wrap>
      <Btn onClick={handleOpen}>Указать</Btn>
      <Popup
        open={open}
      >
        <Container>
          {!block ? (
            <>
              <Header>
                <IconButton size="small" onClick={handleClose}>
                  <BackIcon fontSize="small" />
                </IconButton>
                <Title>Блок издержек</Title>
              </Header>
              <ContentWrap>
                <Content>
                  <Description>
                    Заполните все издержки, чтобы сформировать юнит экономику.
                  </Description>
                  <MenuItem checked={data.team !== null} onClick={changeBlock('team')}>
                    <span>Команда</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                    </svg>
                  </MenuItem>
                  <MenuItem checked={data.infrastructure !== null} onClick={changeBlock('infrastructure')}>
                    <span>Инфраструктура</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                    </svg>
                  </MenuItem>
                  <MenuItem checked={data.promotion_channels !== null} onClick={changeBlock('promotion_channels')}>
                    <span>Каналы продвижения</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                    </svg>
                  </MenuItem>
                  {data.others.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <MenuItem key={index} checked onClick={editOthersBlock(index)}>
                      <span>{item.name}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                      </svg>
                    </MenuItem>
                  ))}

                  <Button color="secondary" onClick={changeBlock('others')}>Добавить свой блок расхода</Button>
                </Content>
              </ContentWrap>

              <ErrorPanel>{error ? 'Введите обязательные блоки' : ''}</ErrorPanel>

              <SaveBtn type="submit" onClick={onSave}>Сохранить</SaveBtn>
            </>
          ) : null}

          {block === 'team' ? (
            <TeamBlock onClose={changeBlock(null)} onChange={onChangeData} data={data.team} />
          ) : null}

          {block === 'infrastructure' ? (
            <InfrastructureBlock
              onClose={changeBlock(null)}
              onChange={onChangeData}
              data={data.infrastructure}
            />
          ) : null}

          {block === 'promotion_channels' ? (
            <PromotionChannelsBlock
              onClose={changeBlock(null)}
              onChange={onChangeData}
              data={data.promotion_channels}
            />
          ) : null}

          {block === 'others' ? (
            <OthersBlock
              onClose={changeBlock(null)}
              onChange={onChangeOthers}
              data={data.promotion_channels}
            />
          ) : null}
        </Container>
      </Popup>
    </Wrap>
  );
}

export default CostsActionBlock;
