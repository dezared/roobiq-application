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


const Difference = styled.p`
  position: absolute;
  width:100%;
  top: 35.28%;
  bottom: 22.87%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  line-height: 1.6em;
  font-size: 1em;
  background: #25A9E0;
`;

function DifferenceSlide( { solution } ) {
  return (
    <SlideBox>
      <Difference>{solution}</Difference>
    </SlideBox>
  )
}

DifferenceSlide.propTypes = {
  solution: PropTypes.string,
}

DifferenceSlide.defaultProps = {
  solution: `
    В отличии от текущих решений потенциальных конкурентов или заменителей, в конечном итоге мы планируем создать сервис, которой позволит пользователям моделировать свой проект: создать презентацию, посчитать экономику, проанализировать конкурентов, сформировать бизнес модель, сформировать отчётные материалы и потренировать навыки презентации, выступлений и переговоров.
  `
}

export default DifferenceSlide;
