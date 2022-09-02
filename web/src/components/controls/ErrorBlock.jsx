import React from 'react';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const Wrap = styled.span`
  font-size: 14px;
  line-height: 16px;
  height: 28px;
  padding: 6px 16px;
  color: #ff1744;
  display: block;
`;

// eslint-disable-next-line
function ErrorBlock({ value, type = 'input', ...props }) {
  return (
    <Wrap>
      {(
        (typeof value !== 'string' && type === 'input') // this is because of it https://stackoverflow.com/questions/66744248/how-to-add-error-message-to-yup-validation-for-array-containing-distinct-values
        || (typeof value === 'string' && type === 'form')
      ) && <ErrorMessage {...props} />}
    </Wrap>
  );
}

export default ErrorBlock;
