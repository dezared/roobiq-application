import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 16px;
overflow: ;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Settings() {
    return(
        <Wrap>
            <Content>
                <h1>
                    Some title
                </h1>
                <form action='#'>
                    <input placeholder='Введите что-то'></input>
                </form>
            </Content>
        </Wrap>
    )
}

export default Settings;