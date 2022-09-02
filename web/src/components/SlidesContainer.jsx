import React, { useEffect } from 'react';
import styled from 'styled-components';
import FirstSlide from '../components/slides/FirstSlide';
import PropTypes from 'prop-types';

const SlideCont = styled.div`
  display: flex;
  position: absolute;
  max-width: 350px;
  padding-left: 5%;
  top: 60%;
  flex-direction: row;  
  align-items: flex-start;
  padding: 16px 0 16px 16px;
  gap: 12px;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  
  width: 100%;
  
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const Slide = styled.div`
  width: 117px;
  height: 66px;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 2px;
  `;

function SlidesCont( { slides } ) {

  return (
    <SlideCont>
    
      <Slide> <FirstSlide /> </Slide>
    </SlideCont>
  );
}

SlidesCont.propTypes = {
  slides: PropTypes.array,
}

SlidesCont.defaultProps = {
  slides: [
    <FirstSlide />
  ]
}

export default SlidesCont;