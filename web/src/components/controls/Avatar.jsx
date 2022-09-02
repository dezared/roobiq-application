import styled from 'styled-components';
import { Avatar } from '@mui/material';

export default styled(Avatar)`
  &.MuiAvatar-root {
    background: ${(props) => props.color};
  }
`;
