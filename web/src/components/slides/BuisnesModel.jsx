import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const HeadCont = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

const Head = styled.p`
  background: #25A9E0;
  color: #fff;
  width: calc((100% / 3) - 0.2em);
  font-size: 1.5em;
  font-weight: 400;
  display: flex;
  justify-content: left;
  padding-left: 3%;
  align-items: center;
  text-align: left;
`;

const ListCont = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  top: 36%;
  left: 5%; 
  display: flex;
  flex-direction: row;
  gap: 8%;
  //text-align: left;
`;

const ListItems = styled.ul`
  width: 25%;
  height: 100%;
  list-style-type: disc;
  color: #25A9E0; 
  font-size: 0.8em;
  align-items: flex-start;
`;

const ListItemsLi = styled.li`
  width: 100%;
  font-weight: 200;
  font-size: 1.2em;
  line-height: 2em;
  color: #000;
`;

const BottomBlock = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  top: 80%;
  font-size: 1em;
  background: #25A9E0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const BottomContentTitle = styled.h1`
  position: absolute;
  top: 25%;
  left: 5%;
  font-size: 1.5em;
  font-weight: 400;
  color: white;
`;

const BottomContentText = styled.span`
  position: absolute;
  top: 65%;
  left: 5%;
  font-size: 1em;
  font-weight: 200;
  color: white;
`;

const UserFocus = styled.span`
  font-size: 1em;
  font-weight: 300;
  font-style: italic;
`;

function BuisnesModel({ title, headers, customers, movement, money, focus }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <HeadCont>
        {headers.map((head) => <Head>{head}</Head>)}
      </HeadCont>
      <ListCont>
        <ListItems>
          {customers.map((customer) => <ListItemsLi key={customer}>{customer}</ListItemsLi>)}
        </ListItems>
        <ListItems>
          {movement.map((step) => <ListItemsLi key={step}>{step}</ListItemsLi>)}
        </ListItems>
        <ListItems>
          {money.map((coin) => <ListItemsLi key={coin}>{coin}</ListItemsLi>)}
        </ListItems>
      </ListCont>
      <BottomBlock>
        <BottomContentTitle>Фокус:</BottomContentTitle>
        <BottomContentText>На текущем этапе фокус на <UserFocus>{focus}</UserFocus></BottomContentText>
      </BottomBlock>
    </SlideBox>
  )
}

BuisnesModel.propTypes = {
  title: PropTypes.string,
  focus: PropTypes.string,
  headers: PropTypes.array,
  customers: PropTypes.array,
  movement: PropTypes.array,
  money: PropTypes.array,
}

BuisnesModel.defaultProps = {
  title: 'Бизнес-модель',
  focus: 'Product-Market Fit',
  headers: [
    'Клиент:',
    'Продвижение:',
    'Монетизация:',
  ],
  customers: [
    'Студенты',
    'Начинающие стартаперы',
    'Преподаватели в школах и их ученики',
  ],
  movement: [
    'Посев в комьюнити',
    'Контент-маркетинг',
  ],
  money: [
    'Пробный период 7 дней',
    'Студенческий: 200 рублей/мес.',
  ],
}

export default BuisnesModel;