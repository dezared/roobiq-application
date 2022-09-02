import styled from 'styled-components';
import Textarea from '@mui/material/TextareaAutosize';

export default styled(Textarea)`
  background-color: #F8F8F8;
  height: 48px;
  border-radius: 16px;
  padding: 12px 16px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #020B0F;
  border: 0;
  outline: none;
  resize: none;

  &::placeholder {
    color: #8B8F94;
  }
`;
