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
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const ListCont = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Human = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  text-align: center;
  align-items: center;
`;

const DevDesc = styled.ul`
  padding-top: 5px;
  list-style-type: disc;
  list-style-position: inside;
`;


const HumanName = styled.h2`
  color: #25A9E0;
  font-size: 1.3em;
  padding-top: 10px;
`;

const HumanJob = styled.h3`
  padding-top: 5px;
  color: #082C4E;
  font-size: 0.8em;
`;

const ImageDiv = styled.div`
  display: block;
  width: 50px;
  height: 50px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function encodeImageFileAsURL(file) {
  try
  {
      var reader = new FileReader();
      reader.onloadend = function() {
        return reader.result;
      }
      reader.readAsBinaryString(file);
  }
  catch { // TODO: Сделать нормальную картинку а не это
      return "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
  }
}

function TeamSlide({ data, slideQuestions }) {

  const [members] = data;
  const [membersId] = slideQuestions;

  return (
    <SlideBox>
      <Title>Команда</Title>
      <ListCont>
        {members[membersId?.id].map((ppl) => 
        <Human>
          <ImageDiv>
            <img src={encodeImageFileAsURL(ppl?.img)} alt="Photo"/>
          </ImageDiv>
          <HumanName>{ppl.name}</HumanName>
          <HumanJob>{ppl.role}</HumanJob>
          <DevDesc>{ppl.experience}</DevDesc>
        </Human>
        )}
      </ListCont>
    </SlideBox>
  )
}

TeamSlide.propTypes = {
  data: PropTypes.array,
  slideQuestions: PropTypes.array,
}

TeamSlide.defaultProps = {
  data: [],
  slideQuestions: [],
}
export default TeamSlide;