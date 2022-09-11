import React from 'react';
import styled from 'styled-components';
import Button from '../components/controls/Button';
import {Stack, IconButton} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import logoStartPage from "../images/splash_logotype.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

const Wrap = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 16px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NameCont = styled.div`
    width: 90%;
    max-width: 315px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute!important;
    top: 14%;
    gap: 7px;
`;

const Name = styled.h2`
    font-size: 25px;
    font-weight: 800;
`;

const ChangeName = styled.span`
    font-size: 17px;
    font-weight: 400;
    text-decoration: underline;
    color: #25A9E0;
`;

const ItemsWrap = styled(Stack)`
  width: 100%;
  max-width: 350px;
  height: 250px;
  margin-bottom: 20px;
  position: absolute!important;
  bottom: 10%;
`;

const Item = styled.div`
  background-color: #fff;
  padding: 4px;
  color: black;
  width: 100%;
  height: 50px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  justify-content: space-between;
`;

const Payment = styled.div`
    width: 100%;
    max-width: 350px;
    height: 150px;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 35px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: rgb(41,91,143);
    background: linear-gradient(90deg, rgba(41,91,143,1) 0%, rgba(0,181,255,1) 100%);
    border: 1px solid #25A9E0;
    border-radius: 10px;
    font-size: 30px;
    bottom: 52%;
    position: absolute!important;
    color: #fff;
`;

const Title = styled.h1`
    font-size: 25px;
    text-align: center;
    color: #25A9E0;
    position: absolute!important;
    bottom: 46%;
`;

const BtnGroup = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: absolute;
  bottom: 20px;
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

function Account() {
    return(
        <Wrap>
            <Content>

            <Header>
                
                <Logo className="splash_logotype" src={logoStartPage} alt="Roobiq Logo" />
                <CompanyName>
                    ROOB
                    <CompanyNameEnd>IQ</CompanyNameEnd>
                </CompanyName>
                <IconButton><AccountCircleIcon fontSize="large" color="darkGrey" width="40px" /></IconButton>
            
            </Header>

                <NameCont>
                    <Name>Артем</Name>
                    <Name>Дербышев</Name>
                    <ChangeName>Изменить данные</ChangeName>
                </NameCont>

                <Payment>Обновить план</Payment>

                <Title>Мои презентации</Title>

                <ItemsWrap>    
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

                <BtnGroup>
                    <Button component={Link} to="/">На главную</Button>
                </BtnGroup>

            </Content>
        </Wrap>
    )
}

export default Account;