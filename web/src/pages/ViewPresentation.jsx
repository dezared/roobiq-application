import FirstSlide from "../components/slides/FirstSlide";
import AuditoriumSlide from "../components/slides/AuditoriumSlide"
import BuisnesModel from "../components/slides/BuisnesModel"
import CompetitorsAndAlternatives from "../components/slides/CompetitorsAndAlternatives"
import CompetitorsSplashSlide from "../components/slides/CompetitorsSplashSlide"
import DifferenceSlide from "../components/slides/DifferenceSlide"
import MarketSlide1 from "../components/slides/MarketSlide1"
import MarketSlide2 from "../components/slides/MarketSlide2"
import SolutionSlide from "../components/slides/SolutionSlide"
import TeamSlide from "../components/slides/TeamSlide"
import ProblemSlide from "../components/slides/ProblemSlide"
import Button from '../components/controls/Button';

import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Slide = styled.div`
    background: white;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    font-size: 7px;
    margin-top: 10px;
    border: 1px solid #f8f8f8;
`;

function ViewPresentation({ answers, handleChange })
{
    console.log(answers);
    return (
        <Wrap>
          <Content>
            <Slide><FirstSlide title={answers[0][0]["project_name"]} desc={answers[0][1]["project_description"]}></FirstSlide></Slide>
            <Slide><AuditoriumSlide
                desc={answers[1][1]["segments_short_description"]}
                list={answers[1][0]["audience_segments"].map(function(v, index){ return { desc: v, index: index }; })}
            ></AuditoriumSlide></Slide>
            <Slide><ProblemSlide title={"Проблема: " + answers[2][0]["problem"]}
                titleList={answers[2][1]["problem_details"].map(function(v, index){ return { desc: v, index: index }; })}
                leftTitle={answers[2][2]["problem_short_description"]}></ProblemSlide></Slide>
            <Slide><SolutionSlide title={answers[3][0]["product_feature"]}
                solutionList={
                    answers[3][1]["audience_segments"].map(function(v, index) { return {
                         id: index,
                         SolutionItemIcon: index,
                         SolutionItemTitle: v.name,
                         SolutionItemList: { desc: v.description, index: index} 
                         }})}></SolutionSlide></Slide>
            <Slide><MarketSlide1 title={"Рынок: " + answers[4][0]["market_segments"].join(", ")}
                sources={(answers[4][1]["market_tam"].source + " ").concat((answers[4][2]["market_sam"].source + " "), (answers[4][3]["market_som"].source + " "))}
                tam={{
                    value: answers[4][1]["market_tam"].amount,
                    list: answers[4][1]["market_tam"].description
                }}
                sam={{
                    value: answers[4][2]["market_sam"].amount,
                    list: answers[4][2]["market_sam"].description
                }}
                som={{
                    value: answers[4][3]["market_som"].amount,
                    list: answers[4][3]["market_som"].description
                }}
                ></MarketSlide1></Slide>
            <Slide><CompetitorsSplashSlide></CompetitorsSplashSlide></Slide>
            <Slide><CompetitorsAndAlternatives competitors={answers[5][1]["direct_competitors"].map(function(v, index) { return { id: index, name: v.name }})}
                properties={answers[5][0]["competitors_properties"]}
                massive={
                    answers[5][0]["competitors_properties"].map((val, index_x) => {
                        var mass = []
                        mass.push(answers[5][1]["direct_competitors"].map(function(v, index_y) {
                            var flag = false;
                            var key = index_x + "-" + index_y;
                            if(v.properties.find(m => m == val))
                                flag = true;
                            
                            return { key: key, flag: flag }
                        }))

                        return mass;
                    })
                }></CompetitorsAndAlternatives></Slide>
            <Slide><DifferenceSlide solution={answers[5][2]["competitors_difference"]}></DifferenceSlide></Slide>
            <Slide><TeamSlide people={answers[6][0]["members"].map(function(v) {
                return { name: v.name, job: v.role, desc: v.experience, imageSrc: encodeImageFileAsURL(v.image) }
            })}></TeamSlide></Slide>
           </Content> 
        </Wrap>
    )
}

function encodeImageFileAsURL(file) {
    try
    {
        console.log(file)
        var reader = new FileReader();
        reader.onloadend = function() {
          return reader.result;
        }
        reader.readAsBinaryString(file);
    }
    catch { // TODO: Сделать нормальную картинку а не это
        return "https://secure.gravatar.com/avatar/06fc5f3a3fac500fdba0cf2b19e82264?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png"
    }
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