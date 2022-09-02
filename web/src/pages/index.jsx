/* eslint-disable */
import React from 'react';
import {Stack, IconButton} from '@mui/material';
import Button from '../components/controls/Button';
import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import logoStartPage from "../images/splash_logotype.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  width: 100%;
`;

const MyButton = styled(Button)`
  width: 90%;
  max-width: 315px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 16px;
  bottom: 20px;
  position: absolute!important;
`;

const ItemsWrap = styled(Stack)`
  width: 100%;
  max-width: 350px;
`;

const Item = styled.div`
  background-color: #fff;
  padding: 4px;
  color: black;
  width: 100%;
  height: 60px;
  margin-top: 28px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  justify-content: space-between;
`;

const Header = styled.header`
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

function Main() {
  return (
    <Wrap>
      <Header>
        <Logo className="splash_logotype" src={logoStartPage} alt="Roobiq Logo" />
        <CompanyName>
          ROOB
          <CompanyNameEnd>IQ</CompanyNameEnd>
        </CompanyName>
        <IconButton><AccountCircleIcon fontSize="large" color="darkGrey" width="40px" /></IconButton>
      </Header>


       <ItemsWrap spacing={2}>
        <Item>
            <span>Презентация для Microsoft</span>
            <div>
              <IconButton><DownloadIcon color="darkGrey" /></IconButton>
              <IconButton><DeleteIcon color="darkGrey" /></IconButton>
            </div>
        </Item>
        <Item>
            <span>Презентация seed round</span>
            <div>
              <IconButton><DownloadIcon color="darkGrey" /></IconButton>
              <IconButton><DeleteIcon color="darkGrey" /></IconButton>
            </div>
        </Item>
        <Item>
            <span>Презентация для СБЕРА</span>
            <div>
              <IconButton><DownloadIcon color="darkGrey" /></IconButton>
              <IconButton><DeleteIcon color="darkGrey" /></IconButton>
            </div>
        </Item>
       </ItemsWrap>
       <MyButton component={Link} to="/constructor">Создать презентацию</MyButton>
    </Wrap>
  );
}

export default Main;
