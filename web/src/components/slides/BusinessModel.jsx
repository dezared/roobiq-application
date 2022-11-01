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
  font-size: 1.25em;
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

const TariffWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 10px;
`;

function BusinessModel({ data, slideQuestions }) {
  const [promotionTypes, monetization, tariffs, focus] = data;
  const [promotionTypesId, monetizationId, tariffsId, focusId] = slideQuestions;
  const headers = ['Канал провижения', 'Тип монетизации', 'Варианты тарифов'];

  return (
    <SlideBox>
      <Title>Бизнес-модель</Title>
      <HeadCont>
        {headers.map((head) => <Head>{head}</Head>)}
      </HeadCont>
      <ListCont>
        <ListItems>
          {promotionTypes[promotionTypesId?.id].map((customer) => <ListItemsLi key={customer}>{customer}</ListItemsLi>)}
        </ListItems>
        <ListItems>
          {monetization[monetizationId?.id].map((step) => <ListItemsLi key={step}>{step}</ListItemsLi>)}
        </ListItems>
        <ListItems>
          {tariffs[tariffsId?.id].map((tariff) => 
          <ListItemsLi key={tariff?.name}>
            <TariffWrapper>
              <span>{tariff?.name}</span> 
              <span>{tariff?.description}</span>
            </TariffWrapper>
          </ListItemsLi>)}
        </ListItems>
      </ListCont>
      <BottomBlock>
        <BottomContentTitle>Фокус:</BottomContentTitle>
        <BottomContentText>На текущем этапе фокус на <UserFocus>{focus[focusId?.id]}</UserFocus></BottomContentText>
      </BottomBlock>
    </SlideBox>
  )
}

BusinessModel.propTypes = {
  data: PropTypes.array,
  slideQuestions: PropTypes.array,
}

BusinessModel.defaultProps = {
  data: [],
  slideQuestions: [],
}

export default BusinessModel;