import { ActionType } from "..";
import { SLIDE_TYPES } from "../../constants";

export const findTeam = {
  numId: 2,
  id: 'find_team',
  name: 'Обзор проекта',
  order: 1,
  steps: [
    {
    id: 'project',
    name: 'Проект',
    slideType: SLIDE_TYPES?.FIRST,
    questions: [
      {
        id: 'project_name',
        question: 'Отлично! Подскажи пожалуйста, название проекта?',
        answerType: ActionType.text,
      }, {
        id: 'project_description',
        question: 'В 2-3 предложения опиши проект пожалуйста.',
        answerType: ActionType.text,
      }],
  },
  {
    id: 'audience',
    name: 'Аудитория',
    slideType: SLIDE_TYPES?.AUDITRIUM,
    questions: [{
      id: 'audience_segments',
      question: 'Укажи сегменты целевой аудитории.',
      answerType: ActionType.textArray,
      payload: {
        title: 'Сегменты аудитории',
        description: 'Укажи сегменты, на которые будешь фокусироваться в первую очередь.',
        itemName: 'Сегмент',
        btnText: 'Указать сегменты',
      },
    }, {
      id: 'segments_short_description',
      question: 'Теперь давай немного расскроем тезисы кратким общим описанием:',
      answerType: ActionType.text,
    }],
  },
  {
    id: 'problem',
    name: 'Цель',
    slideType: SLIDE_TYPES?.COMPETITORS_SPLASH,
    questions: [{
      id: 'problem',
      question: 'Теперь нужно 1 тезисом сформулировать цель, которую преследует проект:',
      answerType: ActionType.text,
    }, {
      id: 'problem_details',
      question: 'Отлично! Чтобы всем всё стало понятно, нужно развернуть основной тезис ☝🏼',
      answerType: ActionType.textArray,
      payload: {
        title: 'Раскрываем проблему',
        description: 'Желательно добавить как минимум 3, раскрывающих основной тезис пункта.',
        itemName: 'Пункт',
        btnText: 'Перейти к описанию',
        minElements: 3,
      },
    }, {
      id: 'problem_short_description',
      question: 'Супер 👍🏼 Теперь давай немного расскроем тезисы кратким общим описанием:',
      answerType: ActionType.text,
    }],
  },
  {
    id: 'product',
    name: 'Решение',
    slideType: SLIDE_TYPES?.SOLUTION,
    questions: [{
      id: 'product_feature',
      question: 'Опиши своё решение 1 тезисом',
      answerType: ActionType.text,
    },
    {
      id: 'audience_segments',
      question: 'Теперь, нужно раскрыть решение. Я подготовил для этого слайд с 3 пунктами. Заполни их пожалуйста.',
      answerType: ActionType.objectArray,
      payload: {
        title: 'Подробное описание решения',
        description: 'У каждого пункта нужно указать название и краткое описание.',
        itemName: 'Пункт',
        btnText: 'Заполнить',
        minElements: 3,
        deletable: false,
        addable: false,

        objectFields: [{
          name: 'name',
          label: 'Название',
          placeholder: 'Название печатать тут',
          type: ActionType.text,
        }, {
          name: 'description',
          label: 'Описание',
          placeholder: 'Описание печатать тут',
          type: ActionType.textArrayForm,
          payload: {
            title: 'Добавьте краткое описание',
            connectWithParentByName: "description",
            minElements: 1,
            btnText: 'Добавить',
            itemName: 'Описание',
            description: "Введите описание ниже",
            deletable: true,
            addable: true
          }
        }],
      },
    },
    ],
  },
  {
    id: 'market',
    name: 'Рынок',
    slideType: SLIDE_TYPES?.MARKET,
    questions: [
      {
        id: 'market_segments',
        question: 'В первую очередь выбери сегмент: B2B, B2C, B2G...или несколько.',
        answerType: ActionType.selectMultiple,
        payload: {
          title: 'Сегмент',
          btnText: 'Выбрать сегмент',
          options: [{
            value: 'b2c',
            title: 'B2C',
            description: 'когда клиенты любые физ.лица',
          }, {
            value: 'b2b',
            title: 'B2B',
            description: 'когда клиенты любые юр.лица',
          }, {
            value: 'b2g',
            title: 'B2G',
            description: 'когда клиенты государства',
          }],
        },
      }, {
        id: 'market_tam',
        question: 'Укажи размеры рынков TAM (общий целевой рынок, где потенциально могут пользоваться продуктом), SAM (доступный объем рынка) и SOM (реально достижимый объем рынка), на который ориентирован твой продукт. Здесь надо  показать источники информации или дать ссылки на собственные исследования.',
        answerType: ActionType.object,
        payload: {
          title: 'Рынок: TAM',
          description: 'Нужно прописать ориентировочную цифру и дать пояснение.',
          btnText: 'Указать',
          itemName: 'ТАМ',

          objectFields: [{
            name: 'amount',
            label: 'ТАМ',
            placeholder: 'Цифру печатать тут',
            type: ActionType.text,
          }, {
            label: 'Пояснение',
            placeholder: 'Поянение печатать тут',
            name: 'description',
            type: ActionType.textArrayForm,
            payload: {
              title: 'Добавьте поянение описание',
              connectWithParentByName: "description",
              minElements: 1,
              btnText: 'Добавить',
              itemName: 'Пояснение',
              description: "Введите поянение ниже",
              deletable: true,
              addable: true
            }
          }, {
            name: 'source',
            label: 'Источники',
            placeholder: 'Источники печатать тут',
            type: ActionType.text,
          }],
        },
      }, {
        id: 'market_sam',
        question: 'Укажи в денежном выражении часть от предыдущего показателя, на основе тех, кто может себе позволить ваше решение.',
        answerType: ActionType.object,
        payload: {
          title: 'Рынок: SAM',
          description: 'Нужно прописать ориентировочную цифру и дать пояснение.',
          btnText: 'Указать',
          itemName: 'SAM',

          objectFields: [{
            name: 'amount',
            label: 'SAM',
            placeholder: 'Цифру печатать тут',
            type: ActionType.text,
          }, {
            label: 'Пояснение',
            placeholder: 'Поянение печатать тут',
            name: 'description',
            type: ActionType.textArrayForm,
            payload: {
              title: 'Добавьте поянение описание',
              connectWithParentByName: "description",
              minElements: 1,
              btnText: 'Добавить',
              itemName: 'Пояснение',
              description: "Введите поянение ниже",
              deletable: true,
              addable: true
            }
          }, {
            name: 'source',
            label: 'Источники',
            placeholder: 'Источники печатать тут',
            type: ActionType.text,
          }],
        },
      }, {
        id: 'market_som',
        question: 'Укажи в денежном выражении сколько ваше решение может забрать рынка за год (максимально реалистично). Сколько сможет оказать услуг, произвести продуктов и пр.',
        answerType: ActionType.object,
        payload: {
          title: 'Рынок: SOM',
          description: 'Нужно прописать ориентировочную цифру и дать пояснение.',
          btnText: 'Указать',
          itemName: 'SOM',

          objectFields: [{
            name: 'amount',
            label: 'SOM',
            placeholder: 'Цифру печатать тут',
            type: ActionType.text,
          }, {
            label: 'Пояснение',
            placeholder: 'Поянение печатать тут',
            name: 'description',
            type: ActionType.textArrayForm,
            payload: {
              title: 'Добавьте поянение описание',
              connectWithParentByName: "description",
              minElements: 1,
              btnText: 'Добавить',
              itemName: 'Пояснение',
              description: "Введите поянение ниже",
              deletable: true,
              addable: true
            }
          }, {
            name: 'source',
            label: 'Источники',
            placeholder: 'Источники печатать тут',
            type: ActionType.text,
          }],
        },
      }],
  },
  {
    id: 'competitors',
    name: 'Конкуренты',
    slideType: SLIDE_TYPES?.COMPETITORS_SPLASH,
    questions: [
      {
        id: 'competitors_properties',
        question: 'Далее опиши чем твой проект лучше конкурентов...',
        answerType: ActionType.textArray,
        payload: {
          title: 'Свойства конкурентов',
          description: 'Сформулируй функциональные свойства, по которым будем сравнить твое решение (или несколько решений) с конкурентами для демонстрации преимуществ.',
          itemName: 'Свойство',
          btnText: 'Описать',
        },
      }, {
        id: 'direct_competitors',
        question: 'Напиши основных ПРЯМЫХ конкурентов (делают тоже самое, что и ты и их ЦА такая же как у тебя)',
        answerType: ActionType.objectArray,
        payload: {
          title: 'Прямые конкуренты',
          description: 'Прямые конкуренты делают тоже самое, что и ты и их ЦА такая же как у тебя. Также отметь свойства, которые есть у конкурентов.',
          itemName: 'Конкурент',
          btnText: 'Прописать прямых',
          minElements: 3,

          objectFields: [{
            name: 'name',
            label: 'Конкурент',
            placeholder: 'Название печатать тут',
            type: ActionType.text,
          }, {
            name: 'properties',
            label: 'Свойства',
            type: ActionType.checkboxArray,
            sourceField: 'competitors_properties',
          }],
        },
      }, {
        id: 'competitors_difference',
        question: 'Теперь нужно прописать отличия, чтобы отстроиться от конкурентов и подчеркнуть то самое важное отличие:',
        answerType: ActionType.text,
      }],
  },
  {
    id: 'team',
    name: 'Команда',
    slideType: SLIDE_TYPES?.TEAM,
    questions: [
      {
        id: 'members',
        question: 'Теперь давай расскажем о команде проекта.',
        answerType: ActionType.objectArray,
        payload: {
          title: 'Команда',
          description: 'Укажи всех ключевых участников презентуемого проекта:',
          itemName: 'Участник',
          btnText: 'Рассказать',

          objectFields: [{
            name: 'name',
            label: 'ФИО',
            placeholder: 'ФИО печатать тут',
            type: ActionType.text,
          }, {
            name: 'role',
            label: 'Роль/Специализация',
            placeholder: 'Роль/Специализацию тут',
            type: ActionType.text,
          }, {
            label: 'Опыт',
            placeholder: 'Опыт/пояснение/описание здесь',
            name: 'experience',
            type: ActionType.textArrayForm,
            payload: {
              title: 'Добавьте опыт работника',
              connectWithParentByName: "experience",
              minElements: 1,
              btnText: 'Добавить',
              itemName: 'Опыт',
              description: "Введите опыт ниже",
              deletable: true,
              addable: true
            }
          }, {
            name: 'image',
            type: ActionType.image,
          }],
        },
      },
    ],
  },],
};