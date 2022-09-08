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
  left: 6.51%;
  top: 44.81%;
  font-weight: 700;
  font-size: 3em;
  letter-spacing: 0.1em;
  color: #25A9E0;
`;

const Description = styled.p`
  position: absolute;
  left: 6.41%;
  top: 60.78%;
  font-weight: 400;
  font-size: 1.5em;
  color: #404041;
`;

function FirstSlide({ data, slideQuestions }) {
  const [title, desc] = data;
  const [titleID, descId] = slideQuestions;

  const finalTitle = title[titleID?.id] || 'ROOBIQ';
  const finalDesc = desc[descId?.id] || 'Конструктор презентаций с экономическими расчетами';

  return (
    <SlideBox>
      <Title>{ finalTitle }</Title>
      <Description>{ finalDesc }</Description>
    </SlideBox>
  )
}

FirstSlide.propTypes = {
  data: PropTypes.array,
  slideQuestions: PropTypes.array,
}

FirstSlide.defaultProps = {
  data: [],
  slideQuestions: [],
}

export default FirstSlide;
