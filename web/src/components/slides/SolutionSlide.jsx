import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import BookIcon from '../../assets/icons/book.svg';
import BrainIcon from '../../assets/icons/brain.svg';
import PencilIcon from '../../assets/icons/pencil.svg';

const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex-wrap: nowrap;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
  background: #25A9E0 ;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #fff;
`;

const SolutionList = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  position: absolute;
  text-align: center;
  left: 5%;
  top: 33.61%;
`;

const SolutionItem = styled.div`
  flex-basis:100%;
  font-size: 1em;
`;

const SolutionItemWrap = styled.div`
  display: flex;
  align-items: center;
  flex-basis:100%;
  color: #fff;
`;

const SolutionItemIcon = styled.h2`
  top: 5%;
  //position: absolute;
  font-size: 1.7em;
  line-height: 1.8em;
`;

const SolutionItemTitle = styled.h2`
  //position: absolute;
  top: 45%;
  font-weight: 500;
  font-size: 1.3em;
  line-height: 2em;
  color: #FFFFFF;
`;


const SolutionItemDesc = styled.div`
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.75em;
  color: #fff;
`;

const SlideIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`;

function SolutionSlide({ data, slideQuestions }) {
  console.log(BookIcon);
  const defaultData = [
    {
      name: 'Constructor',
      description: 'ConstructorTitle',
    },
    {
      name: 'Constructor',
      description: 'ConstructorTitle',
    },
    {
      name: 'Constructor',
      description: 'ConstructorTitle',
    },
  ];

  const [title, solutionList] = data;
  const [titleId, solutionListId] = slideQuestions;

  const finalTitle = title[titleId?.id] || 'Solution and product';
  const finalSolutionList = solutionList[solutionListId?.id] || defaultData;

  console.log(finalTitle, finalSolutionList);

  const slideIcons = [PencilIcon, BrainIcon, BookIcon];

  return (
    <SlideBox>
      <Title>{finalTitle}</Title>
      <SolutionList>
        {finalSolutionList.map((item, itemIndex) => (
          <SolutionItemWrap>
            {itemIndex !== 0 && (
              <>+</>
            )}
            <SolutionItem key={itemIndex}>
              <SlideIcon src={slideIcons[itemIndex]}/>
              <SolutionItemTitle>{item?.name}</SolutionItemTitle>
              <SolutionItemDesc>{item?.description}</SolutionItemDesc>
            </SolutionItem>
          </SolutionItemWrap>
        ))}
      </SolutionList>
    </SlideBox>
  );
}

SolutionSlide.propTypes = {
  data: PropTypes.array,
  slideQuestions: PropTypes.array,
}

SolutionSlide.defaultProps = {
  data: [],
  slideQuestions: [],
}

export default SolutionSlide;
