import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/index';
import TextInput from '../components/controls/TextInput';
import Button from '../components/controls/Button';

const Wrap = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 16px;
overflow: ;
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
  position: absolute!important;
  bottom: 20px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChangeBlock = styled.h1` 
    font-size: 30px;
    text-align: center;
    font-weight: 500;
    color: #25A9E0;
`;

const MyTextInput = styled(TextInput)`
    margin-top: 20px;
`;

function Settings() {
    return(
        <Wrap>
            <Content>
                <Header />
                <ChangeBlock>Изменить имя</ChangeBlock>
                <MyTextInput placeholder="Введите новое имя"/>
                <MyButton>Сохранить изменения</MyButton>
            </Content>
        </Wrap>
    )
}

export default Settings;