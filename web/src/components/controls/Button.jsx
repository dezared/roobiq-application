import styled from 'styled-components';
import { Button } from '@mui/material';
import { rgba } from 'polished';

const theme = {
  primary: {
    color: '#345CCE',
    hoverColor: rgba('#345CCE', 0.85),
  },
  secondary: {
    color: '#919FC7',
    hoverColor: rgba('#919FC7', 0.85),
  },
};

const getBackgroundColor = (props) => {
  if (props.variant === 'text' || props.variant === 'outlined') {
    return undefined;
  }

  return theme[props.color]?.color || theme.primary.color;
};

const getTextColor = (props) => {
  if (props.variant === 'text' || props.variant === 'outlined') {
    return theme[props.color]?.color || theme.primary.color;
  }

  return '#FFFFFF';
};

const getHoverColor = (props) => {
  if (props.variant === 'text' || props.variant === 'outlined') {
    return undefined;
  }

  return theme[props.color]?.hoverColor || theme.primary.hoverColor;
};

export default styled(Button)`
  &.MuiButtonBase-root {
    background: ${(props) => getBackgroundColor(props)};
    height: 48px;
    border-radius: 32px;
    border: 0;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 16px;
    text-transform: none;
    color: ${(props) => getTextColor(props)};
    
    &:hover {
      background: ${(props) => getHoverColor(props)};
    }
    
    &:disabled {
      background: #DADDE1;
      color: #FFFFFF;
    }
  }
`;
