import React from 'react';
import styled from 'styled-components';
import Button from '../components/controls/Button';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import ProfileIcon from '../assets/icons/profile.svg'; 

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
  height: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

const NameCont = styled.div`
    width: 90%;
    max-width: 315px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10px;
`;

const Name = styled.h2`
    font-size: 25px;
    font-weight: 800;
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
    margin-top: 10px;
    color: #fff;
`;


const BtnGroup = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 5px;
`;

const NameWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const NameIcon = styled.img`
    width: 75px;
    height: 75px;
    margin-right: 20px;
`;



function Account() {
    return(
        <Wrap>
            <Header withAccount={false} />
            <Content>
                <NameWrap>
                    <NameIcon src={ProfileIcon} />
                    <NameCont>
                        <Name>Артем</Name>
                        <Name>Дербышев</Name>
                    </NameCont>
                </NameWrap>
                

                <Payment>Обновить план</Payment>

            </Content>
            <BtnGroup>
                <Button component={Link} to="/">На главную</Button>
                <Button component={Link} to="/settings">Настройки</Button>
            </BtnGroup>
        </Wrap>
    )
}

export default Account;