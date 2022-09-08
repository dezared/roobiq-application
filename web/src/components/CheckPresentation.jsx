import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './controls/Button';
import { DefineSlide } from './slides/DefineSlide';
import scenarios from '../configs/scenarios';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "../styles/utils.css";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 40px;
  background: #f9f9f9;
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
  margin-bottom: 20px;
`;

const Window = styled.div`
  width: 99%;
  height: 98%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(107, 115, 137, 0.2);
  border-radius: 16px;
  font-size: 7px;
`;

const CarouselCustomWrapper = styled.div`
  width: 100%;
  display; flex;
  flex: 1;
  flex-direction: column;
`;

const CarouselPreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  overflow-y: hidden;
  width: 100%;
  padding: 5px 0;
`;

const CarouselPreviewItem = styled.div`
  width: 125px;
  height: 75px;
  display: flex;
  flex-shrink: 0;
  margin-right: 10px; 
  box-shadow: 0px 2px 4px rgba(107, 115, 137, 0.2);
  border-radius: 16px;
  font-size: 5px;
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
`;

function CheckPresentation({ handleChange, answers, сurrentStep, scenarioId }) {

  const [activeSlide, setActiveSlide] = useState(сurrentStep);

  return (
    <Wrap>
      <Content>
        <Title>Презентация по итогу {сurrentStep + 1}-й секции</Title>
        <CarouselCustomWrapper>       
          <Carousel selectedItem={activeSlide} showStatus={false} showIndicators={false}>
            {answers?.map((item, itemIndex) => {
              const slideType = scenarios[scenarioId]?.steps[itemIndex]?.slideType;

              return (
                <Window>
                  <DefineSlide answers={answers} type={slideType} />
                </Window>
              )
            })}
          </Carousel>
          <CarouselPreviewWrapper>
            {answers?.map((item, itemIndex) => {
              const slideType = scenarios[scenarioId]?.steps[itemIndex]?.slideType;

              return (
                <CarouselPreviewItem onClick={() => setActiveSlide(itemIndex)}>
                  <DefineSlide answers={answers} type={slideType} />
                </CarouselPreviewItem>
              )
            })} 
          </CarouselPreviewWrapper>       
        </CarouselCustomWrapper>
        <MyButton onClick={handleChange}>Вернуться к созданию</MyButton>
      </Content>
    </Wrap>
  )
}

export default CheckPresentation;
