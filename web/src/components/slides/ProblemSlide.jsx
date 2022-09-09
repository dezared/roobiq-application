import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const LeftBlock = styled.div`
  position: absolute;
  width: 35%;
  height: 40%;
  left: 0;
  top: 39.6%;
  background: #25A9E0;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightBlock = styled.div`
  position: absolute;
  width: 65%;
  height: 40%;
  left: 35%;
  top: 39.6%;
  background: #fff;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-center;
  filter: none;
`;

const LeftTitle = styled.p`
  position: absolute;
  left: 14.3%;
  font-weight: 700;
  font-size: 2.1em;
  color: #FFFFFF;
`;

const TitleList = styled.ul`
  position: absolute;
  left: 5%;
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1em;
`;

const TitleLi = styled.li`
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1em;
  color: #404041;

`;

function ProblemSlide({ data, slideQuestions }) {

  const [title, problemDetails, problemDesc] = data;
  const  [titleId, problemDetailsId, problemDescId] = slideQuestions;

  const finalTitle = "Проблема: " + title[titleId?.id];
  const finalProblemDetails = problemDetails[problemDetailsId?.id];
  const finalProblemDesc = problemDesc[problemDescId?.id];

  return (
    <SlideBox>
      <Title>{ finalTitle }</Title>
      <div>
        <LeftBlock>
          <LeftTitle>
            { finalProblemDesc }
          </LeftTitle>
        </LeftBlock>
        <RightBlock>  
          <TitleList>
            {finalProblemDetails.map((item, itemIndex) => <TitleLi key={itemIndex}>{item}</TitleLi>)}
          </TitleList>
        </RightBlock>
      </div>
    </SlideBox>
  )
}

ProblemSlide.propTypes = {
  data: PropTypes.array,
  slideQuestions: PropTypes.array,
}

ProblemSlide.defaultProps = {
  data: [],
  slideQuestions: [],
}


export default ProblemSlide;
