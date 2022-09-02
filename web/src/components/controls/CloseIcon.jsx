import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const Circle = styled.svg`
  color: #E0254C;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
  &:hover {
    color: ${rgba('#E0254C', 0.85)};
  }
`;

function CloseIcon(props) {
  return (
    <Circle width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.790039" y="0.789062" width="16" height="16" rx="8" fill="currentColor" />
      <path d="M5 12.9971L13 4.99969" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 5.00488L13 13.0023" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </Circle>
  );
}

export default CloseIcon;
