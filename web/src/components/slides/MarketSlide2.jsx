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

const LeftTitle = styled.p`
  position: absolute;
  left: 4%;
  right: 0;
  top: 38%; 
  font-weight: 500;
  font-size: 1.5em;
  line-height: 0.8em;
  color: #25A9E0;
`;

const LeftCount = styled.p`
  position: absolute;
  left: 4%;
  right: 4.15%;
  top: 47.54%;
  bottom: 0;
  font-weight: 500;
  font-size: 4em;
  color: #25A9E0;
`;

const LeftVal = styled.p`
  position: absolute;
  left: 4%;
  top: 66%;
  font-weight: 500;
  font-size: 1.8em;
  line-height: 1em;
  color: #25A9E0;
`;

const Site = styled.a`
  position: absolute;
  left: 4.84%;
  bottom: 5.46%;
  font-style: normal;
  font-weight: 300;
  font-size: 0.7em;
  line-height: 3em;
  text-decoration: none;
  color: #404041;
`;

const RightBlock = styled.div`
  position: absolute;
  left: 42.81%;
  right: 0;
  top: 0;
  bottom: 0;
  background: #25A9E0;
  font-size: 1em;
`;

const RightCount = styled.p`
  position: absolute;
  right: 5.73%;
  top: 35.37%;
  font-weight: 500;
  font-size: 4em;
  text-align: right;
  color: #FFFFFF;
`;

const RightVal = styled.p`
  position: absolute;
  right: 5.73%;
  bottom: 35.56%;
  font-weight: 500;
  font-size: 2em;
  line-height: 1em;
  text-align: right;
  color: #FFFFFF;
`;

const RightDescription = styled.p`
  position: absolute;
  right: 5.73%;
  top: 70.46%;
  bottom: 20.83%;
  font-weight: 300;
  font-size: 0.8em;
  line-height: 1em;
  text-align: right;
  color: #FFFFFF;
`;

function MarketSlide2({ title, countTitle, count, peopleVal, site, cash, cashVal, desc }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <LeftTitle>{countTitle}</LeftTitle>
      <LeftCount>{count}</LeftCount>
      <LeftVal>{peopleVal}</LeftVal>
      <Site href='#'>Источник: {site}</Site>
      <RightBlock>
        <RightCount>{cash}</RightCount>
        <RightVal>{cashVal}</RightVal>
        <RightDescription>{desc}</RightDescription>
      </RightBlock>
    </SlideBox>
  )
}

MarketSlide2.propTypes = {
  title: PropTypes.string,
  countTitle: PropTypes.string,
  count: PropTypes.number,
  peopleVal: PropTypes.string,
  site: PropTypes.string,
  cash: PropTypes.number,
  cashVal: PropTypes.string,
  desc: PropTypes.string,
}

MarketSlide2.defaultProps = {
  title: 'Market',
  countTitle: 'students',
  count: 3000,
  peopleVal: 'Млн. человек',
  site: 'google.com',
  cash: 19.8,
  cashVal: 'billions euro',
  desc: 'students can buy this only for one cup of coffee:)'
}

export default MarketSlide2;
