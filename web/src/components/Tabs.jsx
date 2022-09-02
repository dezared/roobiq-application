import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;

  width: 126px;
  min-width: 126px;
  height: 56px;

  border-radius: 8px;
`;

const PrevTab = styled(Tab)`
  background: #82CDC4;
  color: #FFFFFF;
`;

const CurrentTab = styled(Tab)`
  background: #2E3135;
  color: #FFFFFF;
`;

const NextTab = styled(Tab)`
  background: #F8F8F8;
  color: #BFC4C9;
`;

const Index = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
`;

const Name = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const TabIcon = React.forwardRef(({
  status, children, id, index,
}, ref) => {
  switch (status) {
    case 'prev':
      return (
        <PrevTab ref={ref} id={id} index={index}>
          <Index>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 13C6 13 9 17 9.5 17C10 17 19 7 19 7" stroke="white" strokeLinecap="round" />
            </svg>
          </Index>
          <Name>{children}</Name>
        </PrevTab>
      );
    case 'current':
      return (
        <CurrentTab ref={ref} id={id} index={index}>
          <Index>{index + 1}</Index>
          <Name>{children}</Name>
        </CurrentTab>
      );
    case 'next':
      return (
        <NextTab ref={ref} id={id} index={index}>
          <Index>{index + 1}</Index>
          <Name>{children}</Name>
        </NextTab>
      );
    default:
      throw new Error(`Status "${status}" does not exists`);
  }
});

TabIcon.propTypes = {
  status: PropTypes.string,
  children: PropTypes.string,
  id: PropTypes.number,
  index: PropTypes.number,
};
TabIcon.defaultProps = {
  status: 'current',
  children: 'U didn`t write there(',
  id: 2,
  index: 2,
};

export default TabIcon;
