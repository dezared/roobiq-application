import { DefineSlide } from '../components/slides/DefineSlide';
import { SLIDE_LIST } from '../configs/constants';

import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Slide = styled.div`
  border: 1px solid #f4f4f4;
  width: 350px;
  height: 200px;
  font-size: 7px;
  margin-top: 20px;
  margin-left: 20px;
//   @media (max-width: 320px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 160px;
//   };
//   @media (max-width: 360px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 185px;
//   };
//   @media (max-width: 400px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 220px;
//   };
//   @media (max-width: 440px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 9px;
//     height: 225px;
//   };
//   @media (max-width: 500px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 255px;
//     font-size: 10px;
//   };
//   @media (max-width: 540px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 11px;
//     height: 280px;
//   };
//   @media (max-width: 600px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 300px;
//     font-size: 11px;
//   };
//   @media (max-width: 640px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 325px;
//     font-size: 13px;
//   };
//   @media (max-width: 700px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 15px;
//     height: 360px;
//   };
//   @media (max-width: 750px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 17px;
//     height: 410px;
//   };
//   @media (max-width: 870px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 18px;
//     height: 450px;
//   };
//   @media (max-width: 920px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 19px;
//     height: 495px;
//   };
//   @media (max-width: 1000px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 20px;
//     height: 550px;
//   };
//   @media (max-width: 1092px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 22px;
//     height: 620px;
//   };
//   @media (max-width: 1200px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 24px;
//     height: 655px;
//   };
//   @media (max-width: 1350px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 27px;
//     height: 745px;
//   };
//   @media (max-width: 1485px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 15px;
//     height: 755px;
//   };
// =======
//     background: white;
//     border-radius: 10px;
//     width: 100%;
//     height: 200px;
//     font-size: 7px;
//     margin-top: 10px;
`;

function ViewPresentation({ answers, handleChange })
{
    console.log(answers);
    return (
        <Wrap>
          <Content>
            {SLIDE_LIST.map((item) => {
                return (
                    <Slide>
                        <DefineSlide type={item} answers={answers} key={`SLIDE_${item}`} />
                    </Slide>
                )
            })}
           </Content> 
        </Wrap>
    )
}



ViewPresentation.defaultProps = { 
    answers: [
    [
        {
            "project_name": "1"
        },
        {
            "project_description": "1"
        }
    ],
    [
        {
            "audience_segments": [
                "1"
            ]
        },
        {
            "segments_short_description": "1"
        }
    ],
    [
        {
            "problem": "1"
        },
        {
            "problem_details": [
                "1233",
                "13",
                "1"
            ]
        },
        {
            "problem_short_description": "1"
        }
    ],
    [
        {
            "product_feature": "1"
        },
        {
            "audience_segments": [
                {
                    "name": "1",
                    "description": [
                        "2"
                    ]
                },
                {
                    "name": "1",
                    "description": [
                        "3"
                    ]
                },
                {
                    "name": "1",
                    "description": [
                        "4"
                    ]
                }
            ]
        }
    ],
    [
        {
            "market_segments": [
                "B2G"
            ]
        },
        {
            "market_tam": {
                "amount": "312",
                "description": [
                    "dadadad"
                ],
                "source": "321"
            }
        },
        {
            "market_sam": {
                "amount": "312",
                "description": [
                    "dadadad"
                ],
                "source": "321"
            }
        },
        {
            "market_som": {
                "amount": "312",
                "description": [
                    "dadadad"
                ],
                "source": "321"
            }
        }
    ],
    [
        {
            "competitors_properties": [
                "1"
            ]
        },
        {
            "direct_competitors": [
                {
                    "name": "1",
                    "properties": []
                },
                {
                    "name": "3",
                    "properties": [
                        "1"
                    ]
                },
                {
                    "name": "8",
                    "properties": []
                }
            ]
        },
        {
            "competitors_difference": "3"
        }
    ],
    [
        {
            "members": [
                {
                    "name": "312",
                    "role": "321",
                    "experience": [ "312" ],
                    "image": {}
                }
            ]
        }
    ]
]
}

export default ViewPresentation;