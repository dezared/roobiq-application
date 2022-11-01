import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {IconButton} from '@mui/material';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
`;

const CompanyName = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #2E3135;
  white-space: nowrap;
`;

const CompanyNameEnd = styled.span`
  color: #345CCE;
`;

function Header({ withAccount = true }) {
  return (
    <HeaderWrapper>          
      <Logo className="splash_logotype" src="/images/splash_logotype.png" alt="Roobiq Logo" />
      <CompanyName>
        ROOB
        <CompanyNameEnd>IQ</CompanyNameEnd>
      </CompanyName>
      {withAccount ? (
        <IconButton component={Link} to="/"><AccountCircleIcon fontSize="large" color="darkGrey" width="40px" /></IconButton>   
      ) : <IconButton component={Link} to="/"><ExitToAppIcon fontSize="large" color="darkGrey" width="10px" /></IconButton>   }
    </HeaderWrapper>
  )
};

export default Header;