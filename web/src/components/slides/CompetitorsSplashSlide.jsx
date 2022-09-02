import styled from 'styled-components';
import React from 'react';

const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
  display: flex;
  justify-content: center;
`;


const MapCompetitors = styled.h1`
  font-size: 2.5em;
  position: absolute;
  top: 45%;
  color: #25A9E0;
`;

function SplashCompetitorsSlide() {
  return (
    <SlideBox>
      <MapCompetitors>Карта конкурентов</MapCompetitors>
    </SlideBox>
  )
}

export default SplashCompetitorsSlide;
