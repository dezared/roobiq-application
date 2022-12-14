import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Button from './controls/Button';
import { DefineSlide } from './slides/DefineSlide';
import scenarios from '../configs/scenarios';
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../styles/utils.css";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px;
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
  line-height: 36px;
  color: #2E3135;
  text-align: left;
  top: 7.5%;
  width: 90%;
  max-width: 315px;
  height: 10%;
  margin-bottom: 20px;
`;

const CarouselItem = styled.div`
  width: 99%;
  height: 98%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(107, 115, 137, 0.2);
  border-radius: 16px;
  font-size: 7px;
  background: white;
  margin-bottom: 16px;
`;

const CarouselItemNumber = styled.span`
  font-size: 16px;
  color: #9191A1;
`;

const CarouselItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4px;

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
  width: auto;
  padding: 5px 0;
  margin-top: 30px;
`;

const CarouselPreviewItem = styled.div`
  width: 325px;
  height: 200px;
  display: flex;
  flex-shrink: 0;
  margin-right: 10px; 
  box-shadow: 0px 2px 4px rgba(107, 115, 137, 0.2);
  border-radius: 16px;
  font-size: 5px;
  background: white;
  transform: scale(.4);
  margin: -60px -80px -60px -95px;
  `;

const CarouselPreviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const CarouselPreviewItemNumber = styled.span`
  font-size: 12px;
  color: #9191A1;
  padding-right: 15px;
  margin: 8px 0;
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
  margin-top: 10px!important;
`;

const MyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  color: #9191A1;
`;

function CheckPresentation({ handleChange, answers, ??urrentStep, scenarioId }) {

  const [activeSlide, setActiveSlide] = useState(??urrentStep);

  const isLastSlide = scenarios[scenarioId]?.steps.length > ??urrentStep + 1;

  const renderTitle = useMemo(() => {
    if (!isLastSlide) {
      return <span>?????????????????????? <br/> ?????????????????? ????????????:</span> 
    }
    return <span>?????????????????????? ???? ?????????? <br/> {??urrentStep + 1}-?? ????????????</span> 
  }, [isLastSlide]);

  

  return (
    <Wrap>
      <Content>
        <Title>{renderTitle}</Title>
        <CarouselCustomWrapper>       
          <Carousel selectedItem={activeSlide} showStatus={false} showIndicators={false} showThumbs={false}>
            {answers?.map((item, itemIndex) => {
              const slideType = scenarios[scenarioId]?.steps[itemIndex]?.slideType;
              const slideQuestions = scenarios[scenarioId]?.steps[itemIndex]?.questions;

              return (
                <CarouselItemWrapper>
                  <CarouselItem>
                    <DefineSlide slideQuestions={slideQuestions} slideIndex={itemIndex} answers={answers} type={slideType} />
                  </CarouselItem>
                  <CarouselItemNumber>{itemIndex + 1}</CarouselItemNumber>
                </CarouselItemWrapper>
              )
            })}
          </Carousel>
          {answers.length > 1 && (
            <CarouselPreviewWrapper>
              {answers?.map((item, itemIndex) => {
                const slideType = scenarios[scenarioId]?.steps[itemIndex]?.slideType;
                const slideQuestions = scenarios[scenarioId]?.steps[itemIndex]?.questions;

                return (
                  <CarouselPreviewItemWrapper>
                    <CarouselPreviewItem onClick={() => setActiveSlide(itemIndex)}>
                      <DefineSlide slideQuestions={slideQuestions} slideIndex={itemIndex} answers={answers} type={slideType} />
                    </CarouselPreviewItem>
                    <CarouselPreviewItemNumber>{itemIndex + 1}</CarouselPreviewItemNumber>
                  </CarouselPreviewItemWrapper>
                )
              })} 
            </CarouselPreviewWrapper>   
          )}    
        </CarouselCustomWrapper>
        <MyButtonWrapper>
          {isLastSlide ? (
            <MyButton onClick={handleChange}>?????????????????? ?? ????????????????</MyButton>
            ) : (
              <>
                <span>?????????????? ?????????????????? ?? ????????????????????</span>
                <MyButton onClick={handleChange} disabled>??????????????</MyButton>
                <MyButton component={Link} to="/">???? ??????????????</MyButton>
              </>
            )
          }
      </MyButtonWrapper>
      </Content>
    </Wrap>
  )
}

export default CheckPresentation;
