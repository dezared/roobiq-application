import React, { Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  IconButton, Modal,
} from '@mui/material';
import {
  FormikProvider, useFormik,
} from 'formik';
import * as Yup from 'yup';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { rgba } from 'polished';
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

const Description = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  align-self: flex-start;
  padding: 16px 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  color: #2E3135;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const DeleteIcon = styled(DeleteOutlineIcon)`
  color: #ff1744;
  &.MuiDivider-root {
    width: 100%;
    border-color: #F8F8F8;
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

const ButtonWrap = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

function TrafficBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: data || {
      quantityOfUsers: '',
      firstPurchaseConversion: '',
      numberOfSales: '',
      orders: '',
      incomeFromPerson: '',
      averageCheck: '',
      costs: '',
      ordersForBillingPeriod: '',
      cac: '',
      userCost: '',
      userRevenue: '',
      profit: '',
      grossRevenue: '',
      attractionCosts: '',
      fixedCosts: '',
    },
    validationSchema: Yup.object().shape({
      quantityOfUsers: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      firstPurchaseConversion: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      numberOfSales: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      orders: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      incomeFromPerson: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      averageCheck: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      costs: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      ordersForBillingPeriod: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      cac: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      userCost: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      userRevenue: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      profit: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      grossRevenue: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      attractionCosts: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      fixedCosts: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      onChange({ traffic: values });
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
        <Title>Трафик</Title>
      </Header>
      <ContentWrap>
        <Content>
          <FieldGroup>
            <FieldsWrap>
              <ItemName>Количество пользователей (лиды)</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="quantityOfUsers"
                value={formik.values.quantityOfUsers}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="quantityOfUsers" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Конверсия в первую покупку (С1)</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="firstPurchaseConversion"
                value={formik.values.firstPurchaseConversion}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="firstPurchaseConversion" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Купили (человек)</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="numberOfSales"
                value={formik.values.numberOfSales}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="numberOfSales" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Заказы</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="orders"
                value={formik.values.orders}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="orders" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Доход с одного платящего</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="incomeFromPerson"
                value={formik.values.incomeFromPerson}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="incomeFromPerson" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Средний чек</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="averageCheck"
                value={formik.values.averageCheck}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="averageCheck" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Издержки</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="costs"
                value={formik.values.costs}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="costs" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Заказов за расчетный период</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="ordersForBillingPeriod"
                value={formik.values.ordersForBillingPeriod}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="ordersForBillingPeriod" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>CAC</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="cac"
                value={formik.values.cac}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="cac" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Стоимость пользователя</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="userCost"
                value={formik.values.userCost}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="userCost" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Доход с пользователя</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="userRevenue"
                value={formik.values.userRevenue}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="userRevenue" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Прибыль</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="profit"
                value={formik.values.profit}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="profit" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Валовая выручка</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="grossRevenue"
                value={formik.values.grossRevenue}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="grossRevenue" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Расходы на привлечение</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="attractionCosts"
                value={formik.values.attractionCosts}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="attractionCosts" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Фикс расходы, в основном на команду</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="fixedCosts"
                value={formik.values.fixedCosts}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="fixedCosts" />
            </FieldsWrap>
          </FieldGroup>
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function ExpensesBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: data || {
      sellingPrice: '',
      commission: '',
      marketingCosts: '',
      userChurn: '',
      ratioCirculationProfitAndGrossProfit: '',
      totalMarketingBudgetPerMonth: '',
    },
    validationSchema: Yup.object().shape({
      sellingPrice: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      commission: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      marketingCosts: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      userChurn: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      ratioCirculationProfitAndGrossProfit: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      totalMarketingBudgetPerMonth: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      onChange({ expenses: values });
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
        <Title>Расходы</Title>
      </Header>
      <ContentWrap>
        <Content>
          <FieldGroup>
            <FieldsWrap>
              <ItemName>Стоимость продажи</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="sellingPrice"
                value={formik.values.sellingPrice}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="sellingPrice" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Комиссии</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="commission"
                value={formik.values.commission}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="commission" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Затраты на маркетинг</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="marketingCosts"
                value={formik.values.marketingCosts}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="marketingCosts" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Отток пользователей</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="userChurn"
                value={formik.values.userChurn}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="userChurn" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>% соотношения оборотной прибыли и валовой</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="ratioCirculationProfitAndGrossProfit"
                value={formik.values.ratioCirculationProfitAndGrossProfit}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="ratioCirculationProfitAndGrossProfit" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Общий маркетинговый бюджет в месяц</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="totalMarketingBudgetPerMonth"
                value={formik.values.totalMarketingBudgetPerMonth}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="totalMarketingBudgetPerMonth" />
            </FieldsWrap>
          </FieldGroup>
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function IncomeBlock({ onClose, data, onChange }) {
  const formik = useFormik({
    initialValues: data || {
      beforeSalesAndMarketingCosts: '',
      beforeSalesAndMarketingPercentages: '',
      tax: '',
      taxPercentages: '',
      amountBeginningOfMonth: '',
      incomeEndOfMonth: '',
      investments: '',
      subscriptionCosts: '',
      subscriptionCostsByMonthOrProductCosts: '',
      grossProfit: '',
      regularitySellingOneUnitPerMonth: '',
      sumMoneyEndOfPeriod: '',
    },
    validationSchema: Yup.object().shape({
      beforeSalesAndMarketingCosts: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      beforeSalesAndMarketingPercentages: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      tax: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      taxPercentages: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      amountBeginningOfMonth: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      incomeEndOfMonth: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      investments: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      subscriptionCosts: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      subscriptionCostsByMonthOrProductCosts: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      grossProfit: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      regularitySellingOneUnitPerMonth: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
      sumMoneyEndOfPeriod: Yup.number()
        .typeError('Нужно ввести число')
        .required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      onChange({ income: values });
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
        <Title>Доходы</Title>
      </Header>
      <ContentWrap>
        <Content>
          <FieldGroup>
            <FieldsWrap>
              <ItemName>
                Прибыль за вычетом затрат на продажу и маркетинг (COGS) до вычета налогов
              </ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="beforeSalesAndMarketingCosts"
                value={formik.values.beforeSalesAndMarketingCosts}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="beforeSalesAndMarketingCosts" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Тоже, но в процентном соотношении к обороту</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="beforeSalesAndMarketingPercentages"
                value={formik.values.beforeSalesAndMarketingPercentages}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="beforeSalesAndMarketingPercentages" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Налоги</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="tax"
                value={formik.values.tax}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="tax" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Тоже, но в процентном соотношении к обороту</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="taxPercentages"
                value={formik.values.taxPercentages}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="taxPercentages" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Сумма на начало месяца</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="amountBeginningOfMonth"
                value={formik.values.amountBeginningOfMonth}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="amountBeginningOfMonth" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Сумма прихода на конец месяца</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="incomeEndOfMonth"
                value={formik.values.incomeEndOfMonth}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="incomeEndOfMonth" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Инвестиции</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="investments"
                value={formik.values.investments}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="investments" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Стоимость подписки</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="subscriptionCosts"
                value={formik.values.subscriptionCosts}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="subscriptionCosts" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Стоимость подписки в месяц или продукта вообще</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="subscriptionCostsByMonthOrProductCosts"
                value={formik.values.subscriptionCostsByMonthOrProductCosts}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="subscriptionCostsByMonthOrProductCosts" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Валовая прибыль</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="grossProfit"
                value={formik.values.grossProfit}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="grossProfit" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Регулярность продажи 1 юнита в месяц</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="regularitySellingOneUnitPerMonth"
                value={formik.values.regularitySellingOneUnitPerMonth}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="regularitySellingOneUnitPerMonth" />
            </FieldsWrap>

            <FieldsWrap>
              <ItemName>Сумма всех денег на конец периода</ItemName>
              <TextInput
                placeholder="Печатать тут"
                name="sumMoneyEndOfPeriod"
                value={formik.values.sumMoneyEndOfPeriod}
                onChange={formik.handleChange}
              />
              <ErrorBlock name="sumMoneyEndOfPeriod" />
            </FieldsWrap>
          </FieldGroup>
        </Content>
      </ContentWrap>

      <SaveBtn type="submit" onClick={onSubmit}>Продолжить</SaveBtn>
    </FormikProvider>
  );
}

function UnitEconomyActionBlock({
  // eslint-disable-next-line no-unused-vars
  actionName, onChange,
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([{
    traffic: null, expenses: null, income: null,
  }]);
  const [error, setError] = useState(false);
  const [block, setBlock] = useState(null);
  const [index, setIndex] = useState(null);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const changeBlock = (blockName, newIndex) => () => {
    setBlock(blockName);
    setIndex(newIndex);
    setError(false);
  };

  const onChangeData = (partData) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      ...partData,
    };
    setData(newData);
  };

  const addItem = () => {
    setData([...data, {
      traffic: null, expenses: null, income: null,
    }]);
  };

  const deleteItem = (i) => {
    const newData = [...data];
    newData.splice(i, 1);
    setData(newData);
  };

  const onSave = useCallback(() => {
    const isError = data.some(({ traffic, income, expenses }) => !traffic || !expenses || !income);
    if (isError) {
      setError(true);
      return;
    }

    onChange({ [actionName]: data });
    handleClose();
    setIndex(null);
  }, [handleClose, onChange, data, actionName]);

  return (
    <Wrap>
      <Btn onClick={handleOpen}>Продолжить</Btn>
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
                <Title>Выход на юнит экономику</Title>
              </Header>
              <ContentWrap>
                {data.map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={i}>
                    <Description>
                      <span>
                        Вариант
                        {' '}
                        {i + 1}
                      </span>

                      <IconButton onClick={() => deleteItem(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Description>
                    <Content>
                      <MenuItem checked={item.traffic !== null} onClick={changeBlock('traffic', i)}>
                        <span>Трафик</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                        </svg>
                      </MenuItem>
                      <MenuItem checked={item.expenses !== null} onClick={changeBlock('expenses', i)}>
                        <span>Расходы</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                        </svg>
                      </MenuItem>
                      <MenuItem checked={item.income !== null} onClick={changeBlock('income', i)}>
                        <span>Доходы</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 14L11 8L5 2" stroke="#2E3135" />
                        </svg>
                      </MenuItem>
                    </Content>
                  </Fragment>
                ))}
                <ButtonWrap>
                  <Button color="secondary" onClick={addItem}>Добавить вариант</Button>
                </ButtonWrap>
              </ContentWrap>

              <ErrorPanel>{error ? 'Введите обязательные блоки' : ''}</ErrorPanel>

              <SaveBtn type="submit" onClick={onSave}>Сохранить</SaveBtn>
            </>
          ) : null}

          {block === 'traffic' ? (
            <TrafficBlock
              onClose={changeBlock(null)}
              onChange={onChangeData}
              data={data[index].traffic}
            />
          ) : null}

          {block === 'expenses' ? (
            <ExpensesBlock
              onClose={changeBlock(null)}
              onChange={onChangeData}
              data={data[index].expenses}
            />
          ) : null}

          {block === 'income' ? (
            <IncomeBlock
              onClose={changeBlock(null)}
              onChange={onChangeData}
              data={data[index].income}
            />
          ) : null}
        </Container>
      </Popup>
    </Wrap>
  );
}

export default UnitEconomyActionBlock;
