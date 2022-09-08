import { DefineSlide } from '../components/slides/DefineSlide';
import scenarios from '../configs/scenarios';

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

function ViewPresentation({ answers, scenarioId, handleChange })
{
    return (
        <Wrap>
          <Content>
            {scenarios[scenarioId]?.steps.map((item, itemIndex) => {
                const currentType = item.slideType;
                return (
                    <Slide>
                        <DefineSlide slideIndex={itemIndex} type={currentType} answers={answers} key={`SLIDE_${item}`} />
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
                "project_name": "Roobiq"
            },
            {
                "project_description": "Наш проект предназначен для работы с презентациями. Создавайте презентации без работы с графикой и сторонними приложенями. Прямо на мобильном устройстве."
            }
        ],
        [
            {
                "audience_segments": [
                    "Студенты",
                    "Стартаперы"
                ]
            },
            {
                "segments_short_description": "Повседневное приложения для тех, кто делает презентации часто."
            }
        ],
        [
            {
                "problem": "Быстрота создания презентаций прямо на мобильном устройстве."
            },
            {
                "problem_details": [
                    "Быстрота работы.",
                    "Удобство работы.",
                    "Шейринг результата по ссылке.",
                    "Надёжное хранение данных.",
                    "Без работы с графикой."
                ]
            },
            {
                "problem_short_description": "Рубик представляет множество различных видов презентаций с различным дизайном. Для любых целей."
            }
        ],
        [
            {
                "product_feature": "Удобное веб-приложение с дизайном формата mobile-first. Вводите текст и получите готовую презентацию."
            },
            {
                "audience_segments": [
                    {
                        "name": "Быстрота работы",
                        "description": [
                            "Скорость работы обусловлена тем, что вам нужно потратить всего 5 минут для заполнения анкеты.",
                            "Программа сама генерирует изоображения и вы можете сохранить их в любом удобном месте и формате."
                        ]
                    },
                    {
                        "name": "Удобство работы.",
                        "description": [
                            "Никакой работы с графикой, шрифтами. Рубик все сделает за вас. От вас требуется только ввод текста и настройка презентации.",
                            "Не передавайте файл другим людям. Просто отправьте ссылку на презентацию."
                        ]
                    },
                    {
                        "name": "Безопасность",
                        "description": [
                            "Настраивайте вашу ссылку на презентации как хотите. Дайте доступ только по ссылке, или определенным пользователям."
                        ]
                    }
                ]
            }
        ],
        [
            {
                "market_segments": [
                    "B2C",
                    "B2B"
                ]
            },
            {
                "market_tam": {
                    "amount": "5.000$",
                    "description": [
                        "Поянение номер 1"
                    ],
                    "source": "https://nc.ru/roobiq"
                }
            },
            {
                "market_sam": {
                    "amount": "12.100$",
                    "description": [
                        "Пояснение номер 2"
                    ],
                    "source": "https://nc.ru/roobiq-sam"
                }
            },
            {
                "market_som": {
                    "amount": "50.000$",
                    "description": [
                        "Пояснение номер 3"
                    ],
                    "source": "https://nc.ru/roobiq-som"
                }
            }
        ],
        [
            {
                "competitors_properties": [
                    "Свойство конкурента номер 1",
                    "Свойство конкурента номер 2",
                    "Свойство конкурента номер 3",
                    "Свойство конкурента номер 4"
                ]
            },
            {
                "direct_competitors": [
                    {
                        "name": "Конкурент 1",
                        "properties": [
                            "Свойство конкурента номер 1",
                            "Свойство конкурента номер 3"
                        ]
                    },
                    {
                        "name": "Конкурент 2",
                        "properties": [
                            "Свойство конкурента номер 2",
                            "Свойство конкурента номер 3",
                            "Свойство конкурента номер 4"
                        ]
                    },
                    {
                        "name": "Конкурент 3",
                        "properties": [
                            "Свойство конкурента номер 1",
                            "Свойство конкурента номер 2"
                        ]
                    }
                ]
            },
            {
                "competitors_difference": "В отличии от большинства конкурентов, мы предлагаем возможность созданя большого количества видов презентации."
            }
        ],
        [
            {
                "members": [
                    {
                        "name": "Александр Вадимович",
                        "role": "PR Менеджер",
                        "experience": [
                            "Без опыта"
                        ],
                        "image": {}
                    }
                ]
            }
        ]
    ]
}

export default ViewPresentation;