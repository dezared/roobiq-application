import React from 'react';
import { Autocomplete as AutocompleteMui } from '@mui/material';
import styled from 'styled-components';
import TextInput from './TextInput';

const StyledAutocompleteMui = styled(AutocompleteMui)`
  .MuiAutocomplete-inputRoot.MuiOutlinedInput-root {
    padding: 12px 16px;
  }
`;

function Autocomplete({ placeholder, ...props }) {
  return (
    <StyledAutocompleteMui
      renderInput={(params) => (
        <TextInput placeholder={placeholder} {...params} />
      )}
      {...props}
    />
  );
}

export default Autocomplete;