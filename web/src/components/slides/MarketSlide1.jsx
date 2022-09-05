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

const TitlesContainer = styled.div`
  width: 50%;
  top: 23%;
  height: 40%;
  left: 5%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8%;  
`;

const TAM = styled.h2`
  font-size: 1.5em;
  color: #C6D5DB;
`;

const SAM = styled.h2`
  font-size: 1.5em;
  color: #B4CFDA;
`;

const SOM = styled.h2`
  font-size: 1.5em;
  color: #25A9E0;
`;

const List = styled.ol`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1.3em;
  color: #25A9E0;
`;

const Li = styled.li`
  color: black;
  font-size: 0.7em;
`;

const Sources = styled.p`
  position: absolute;
  top: 85%;
  width: 60%;
  left: 5.21%;
  font-size: 0.7em;  
  color: #25A9E0;
`;


const BiggestCircle = styled.div`
  width: 45%;
  height: 80%;
  position: absolute;
  right: 3%;
  top: 8.15%;
  border-radius: 100%;
  background: #C6D5DB;
  font-size: 1em;
`;

const MiddleCircle = styled.div`
  width: 75%;
  height: 75%;
  position: absolute;
  left: 13%;
  top: 25.54%;
  border-radius: 100%;
  background: #B4CFDA;
  font-size: 0.9em;
  text-align: center;
`;


const SmallestCircle = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 30%;
  left: 15%;
  border-radius: 100%;
  background: #25A9E0;
  font-size: 0.7em;
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    position: unset!important;
  }
`;

const RightTitle = styled.h2`
  font-size: 2.5em;
  color: #fff;
  position: absolute;
  left: 40%;
  top: 12%;
`;

const NamingArrowWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  div {
    position: relative;

    svg {
      position: absolute;
      z-index: 99999;
      bottom: -2px;
    }
  }
`;

function MarketSlide1({ title, tam, sam, som, sources }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <TitlesContainer>
        <NamingArrowWrapper>
          <TAM>TAM</TAM>
          <div><svg width="119" height="4" viewBox="0 0 813 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.413086 2.10059H812.685" stroke="#C6D5DB" stroke-width="3" stroke-miterlimit="10"/>
          </svg></div>
        </NamingArrowWrapper>
        <List>
          {tam.list.map((t) => <Li>{t}</Li>)}
        </List>

        <NamingArrowWrapper>
          <SAM>SAM</SAM>
          <div><svg width="130" height="4" viewBox="0 0 910 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.413086 2.20044H909.602" stroke="#67808A" stroke-width="3" stroke-miterlimit="10"/>
          </svg></div>
        </NamingArrowWrapper>
        <List>
          {sam.list.map((s) => <Li>{s}</Li>)}
        </List>
        <NamingArrowWrapper>
          <SOM>SOM</SOM>
          <div><svg width="140" height="4" viewBox="0 0 978 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.413086 2.10034H977.757" stroke="#25A9E0" stroke-width="3" stroke-miterlimit="10"/>
          </svg></div>
        </NamingArrowWrapper>
        <List>
          {som.list.map((s) => <Li>{s}</Li>)}
        </List>
      </TitlesContainer>
      <Sources>Источники: {sources}</Sources>
       
      <BiggestCircle>
        <RightTitle>{tam.value}</RightTitle>
        <MiddleCircle>
          <RightTitle>{sam.value}</RightTitle>
          <SmallestCircle>
            <RightTitle>{som.value}</RightTitle>
          </SmallestCircle>
        </MiddleCircle>
      </BiggestCircle>
    
    </SlideBox>
  )
}

MarketSlide1.propTypes = {
  title: PropTypes.string,
  tam: PropTypes.object,
  sam: PropTypes.object,
  som: PropTypes.object,
  sources: PropTypes.array,
}

MarketSlide1.defaultProps = {
  title: 'Market b2b',
  sources: [
    'seed-db.com',
    'gemconsorium.org', 
    'Global Entrepreneurship Monitor', 
    'ВШЭ', 
    'firrma.ru', 
    'Министерство экономического развития',
  ],
  tam: {
    value: '90 billions',
    list: [
      'something',
      'something vol.2'
    ],
  },
  sam: {
    value: '90 billions',
    list: [
      'something',
      'something vol.2'
    ],
  },
  som: {
    value: '90 billions',
    list: [
      'something',
      'something vol.2'
    ],
  },
}

export default MarketSlide1;