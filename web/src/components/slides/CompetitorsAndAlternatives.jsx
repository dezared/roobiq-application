//import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  bottom: 80.89%;
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;


const MyTableContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 350px;
  height: 80%;
  top: 20%;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
`;
const MyTableHead = styled.th`
  flex-basis: 100%;
  text-align: center;
  background: #fff;
  color: #25A9E0;
  font-size: 1.5em;
`;

const TableRow = styled.tr`
  display: flex;

  & svg {
    stroke: white;
  };

  &:nth-child(2n) {
    background: #25A9E0;
    color: #fff;
  };
  &:nth-child(2n+1) {
    color: #25A9E0;

    & svg {
      stroke: #25A9E0!important;
    };
  };
`;

const TableData = styled.td`
  flex-basis: 100%;
  height: auto;
  text-align: center;
  font-size: 1em;
  line-height: 1.3em;
  border-left: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

function CompetitorsAndAlternatives({ title, massive, competitors, properties }) {
  console.log(massive, competitors, properties)
  return (
    <SlideBox>
      <Title>{title}</Title>
      <MyTableContainer>
        <Table sx={{ maxWidth: 350 }} aria-label="simple table">
        <TableRow>
          <MyTableHead></MyTableHead> 
          {competitors.map((competitor) => <MyTableHead key={competitor.id}>{competitor.name}</MyTableHead>)}
        </TableRow>
          {properties.map((row, index) => (
            <TableRow
              key={console.log(massive[index])}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableData>{row}</TableData>
              {massive[index][0].map((data) => <TableData key={data.key}>{
                data.flag? (
                  <svg width="29" height="44" style={{width: 8 + 'px', height: 17 + 'px'}} viewBox="0 0 33 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.79999 30.6L14.5 47.9L28.8 4.39999" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"/>
                  </svg>
                ):(
                  <span></span>
                )
              }</TableData>)}              
            </TableRow>
          ))}
      </Table>
    </MyTableContainer>
    </SlideBox>
  )
}

CompetitorsAndAlternatives.propTypes = {
  title: PropTypes.string,
  massive: PropTypes.array,
  competitors: PropTypes.array,
  properties: PropTypes.array
}

CompetitorsAndAlternatives.defaultProps = {
  title: 'Конкуренты и альтернативы',
  competitors: [
    {id: 1, name: 'Онлайн редакторы'},
    {id: 2, name: 'Онлайн редакторы 2'},
    {id: 3, name: 'Онлайн редакторы 3'},
  ],
  properties: [
    "cal1",
    "cal2",
    "cal3"
  ],
  massive: [
    [ // x
        { // y
            key: "0-0",
            flag: true,
            star: true
        },
        { // y
            key: "0-1",
            flag: false,
            star: true
        },
        { // y
            key: "0-2",
            flag: false,
            star: true
        }
    ],
    [ // x
        { // y
            key: "1-0",
            flag: false,
            star: true
        },
        { // y
            key: "1-1",
            flag: true,
            star: true
        },
        { // y
            key: "1-2",
            flag: false,
            star: true
        }
    ],
    [ // x
        { // y
            key: "2-0",
            flag: true,
            star: true
        },
        { // y
            key: "2-1",
            flag: false,
            star: true
        },
        { // y
            key: "2-2",
            flag: false,
            star: true
        }
    ]
  ]
}

export default CompetitorsAndAlternatives;