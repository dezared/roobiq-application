import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export default styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: #F8F8F8;
    border-radius: 16px;
    padding: 12px 16px;
  }
  
  & input, textarea {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
    color: #020B0F;
    
    &.MuiOutlinedInput-input {
      height: 24px;
      padding: 0;
    }
    
    &::placeholder {
      color: #8B8F94;
      opacity: 1;
    }
  }
  
  & fieldset {
    border: 0;
  }
`;
