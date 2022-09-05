import React, { useMemo } from 'react';
import styled from 'styled-components';
import Button from './controls/Button';
import SlidesCont from "./SlidesContainer";
import { DefineSlide } from './slides/DefineSlide';
import scenarios from '../configs/scenarios';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 40px;
  background: white;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #2E3135;
  text-align: left;
  top: 7.5%;
  width: 90%;
  max-width: 315px;
  height: 10%;
`;

const Window = styled.div`
  width: 90%;
  position: absolute;
  max-width: 315px;
  height: 25%;
  top: 20%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(107, 115, 137, 0.2);
  border-radius: 16px;
  font-size: 7px;
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
  top: 80%;
  position: absolute;
`;

function CheckPresentation({ handleChange, answers, сurrentStep, scenarioId }) {
  const currentType = useMemo(() => scenarios[scenarioId]?.steps[сurrentStep]?.slideType, [scenarioId, сurrentStep]);

  return (
    <Wrap>
      <Content>
        <Title>Презентация по итогу одной из секций</Title>
        <Window>
          <DefineSlide answers={answers} type={currentType} />
        </Window>
        <SlidesCont />
          <MyButton onClick={handleChange}>Вернуться к созданию</MyButton>
      </Content>
    </Wrap>
  )
}

export default CheckPresentation;
