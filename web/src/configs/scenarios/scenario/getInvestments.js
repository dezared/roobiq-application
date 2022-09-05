import { SLIDE_TYPES, ActionType } from "../../constants";

export const getInvestments = {
  numId: 1,
  id: 'get_investments',
  name: 'Привлечь инвестора',
  order: 2,
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
      name: 'Проблема',
      slideType: SLIDE_TYPES?.PROBLEM,
      questions: [{
        id: 'problem',
        question: 'Теперь нужно 1 тезисом сформулировать проблему, которую решит проект:',
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
      name: 'Решение и продукт',
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
            type: ActionType.text,
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
              name: 'description',
              placeholder: 'Пояснение печатать тут',
              type: ActionType.text,
            }, {
              name: 'source',
              label: 'Источники',
              placeholder: 'Источники печатать тут',
              type: ActionType.text,
            }],
          },
        }, {
          id: 'market_sam',
          question: 'Укажи в денежном выражении часть от предыдущего показателя, на основе тех, кто может себе позволить ваш продукт или аналог.',
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
              name: 'description',
              placeholder: 'Пояснение печатать тут',
              type: ActionType.text,
            }, {
              name: 'source',
              label: 'Источники',
              placeholder: 'Источники печатать тут',
              type: ActionType.text,
            }],
          },
        }, {
          id: 'market_som',
          question: 'Укажи в денежном выражении сколько ваш продукт может забрать рынка за год (максимально реалистично). Сколько сможет оказать услуг, произвести продуктов и пр.',
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
              name: 'description',
              placeholder: 'Пояснение печатать тут',
              type: ActionType.text,
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
          question: 'Далее опиши чем твой продукт лучше конкурентов...',
          answerType: ActionType.textArray,
          payload: {
            title: 'Свойства конкурентов',
            description: 'Сформулируй функциональные свойства, по которым будем сравнить твой продукт с конкурентами для демонстрации преимуществ.',
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
          id: 'indirect_competitors',
          question: 'Напиши основных КОСВЕННЫХ конкурентов (компании близкие к твоему рынку, но главный бизнес-процесс основан на других продуктах, потенциально ЦА может решить свою проблему хотя бы частично через них)',
          answerType: ActionType.objectArray,
          payload: {
            title: 'Косвенные конкуренты',
            description: 'Косвенные (Компании близкие к твоему рынку, но главный бизнес-процесс основан на других продуктах, потенциально ЦА может решить свою проблему хотя бы частично через них). Также отметь свойства, которые есть у конкурентов.',
            itemName: 'Конкурент',
            btnText: 'Прописать прямых',
            minElements: 2,

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
          id: 'alternative_competitors',
          question: 'Напиши основных АЛЬТЕРНАТИВНЫХ конкурентов (компании вообще не из твоего рынка, но через их продукты можно закрыть проблему)',
          answerType: ActionType.objectArray,
          payload: {
            title: 'Альтернативные конкуренты',
            description: 'Альтернативы (компании вообще не из твоего рынка, но через их продукты можно закрыть проблему).. Также отметь свойства, которые есть у конкурентов.',
            itemName: 'Конкурент',
            btnText: 'Прописать прямых',
            minElements: 1,

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
      id: 'business_model',
      name: 'Бизнес-модель',
      slideType: SLIDE_TYPES?.COMPETITORS_SPLASH,
      questions: [
        {
          id: 'promotion_types',
          question: 'Теперь мы должны рассказать инвестору какая у тебя будет бизнес модель. Укажи канал продвижения:',
          answerType: ActionType.selectMultiple,
          payload: {
            title: 'Канал продвижения',
            btnText: 'Указать',
            withOwnOption: true,
            options: [{
              value: 'target',
              title: 'Таргет',
            }, {
              value: 'community',
              title: 'Посев в комьюнити',
            }, {
              value: 'content_marketing',
              title: 'Контент-маркетинг',
            }, {
              value: 'influencers',
              title: 'Лидеры мнений',
            }],
          },
        },
        {
          id: 'monetization',
          question: 'Укажи тип монетизации:',
          answerType: ActionType.selectMultiple,
          payload: {
            title: 'Тип монетизации',
            btnText: 'Указать',
            withOwnOption: true,
            options: [{
              value: 'subscription',
              title: 'Подписная',
            }, {
              value: 'free',
              title: 'Условно бесплатная',
            }, {
              value: 'content',
              title: 'Контентная',
            }, {
              value: 'agent',
              title: 'Агентская',
            }, {
              value: 'add',
              title: 'Рекламная',
            }],
          },
        },
        {
          id: 'tariffs',
          question: 'Укажи варианты тарифов',
          answerType: ActionType.objectArray,
          payload: {
            title: 'Варианты тарифов',
            description: 'Чтобы добавить тариф, нажми соответствующую кнопку :)',
            itemName: 'Тариф',
            btnText: 'Указать варианты тарифов',

            objectFields: [{
              name: 'name',
              label: 'Название',
              placeholder: 'Название печатать тут',
              type: ActionType.text,
            }, {
              name: 'description',
              label: 'Описание',
              placeholder: 'Условие печатать тут',
              type: ActionType.text,
            }],
          },
        },
        {
          id: 'focus',
          question: 'Какой фокус, на текушем этапе?',
          answerType: ActionType.text,
        },
      ],
    },
    {
      id: 'economy',
      name: 'Экономика',
      slideType: SLIDE_TYPES?.COMPETITORS_SPLASH,
      questions: [
        {
          id: 'billing_period',
          question: 'Укажи расчетный период',
          answerType: ActionType.selectSingle,
          payload: {
            title: 'Расчетный период',
            btnText: 'Указать',
            options: [{
              value: 'day',
              title: 'День',
            }, {
              value: 'week',
              title: 'Неделя',
            }, {
              value: 'decade',
              title: 'Декада',
            }, {
              value: 'month',
              title: 'Месяц',
            }, {
              value: 'quarter',
              title: 'Квартал',
            }, {
              value: 'half_year',
              title: 'Полугодие',
            }, {
              value: 'year',
              title: 'Год',
            }],
          },
        },
        {
          id: 'costs',
          question: 'Укажи издержки',
          answerType: ActionType.costs,
          payload: {
            answer: 'Готово',
          },
        },
        {
          id: 'unitEconomy',
          question: 'Выходим на создание юнит-экономики и теперь дополним некоторые данные:',
          answerType: ActionType.unitEconomy,
          payload: {
            answer: 'Готово',
          },
        },
      ],
    },
    {
      id: 'request',
      name: 'Запрос',
      slideType: SLIDE_TYPES?.COMPETITORS_SPLASH,
      questions: [
        {
          id: 'question_to_investor',
          question: 'Давай сформулируем запрос к инвестору',
          answerType: ActionType.selectMultiple,
          payload: {
            title: 'Запрос',
            btnText: 'Указать',
            withOwnOption: true,
            options: [{
              value: 'money',
              title: 'Инвестиции деньгами',
            }, {
              value: 'expertise',
              title: 'Инвестиции экспертизой',
            }, {
              value: 'consultation',
              title: 'Консультация',
            }, {
              value: 'feedback',
              title: 'Обратная связь',
            }, {
              value: 'strategic_partner',
              title: 'Стратегическое партнёрство',
            }],
          },
        },
        {
          id: 'money',
          question: 'Супер! Давай уточним запрос, укажи сумму и и то, на что пойдут эти деньги.',
          answerType: ActionType.objectArray,
          payload: {
            title: 'Запрос: инвестиции деньгами',
            description: 'Уточни запрос, указав нужную сумму и то, на что пойдут эти деньги.',
            itemName: 'Запрос',
            btnText: 'Указать',

            objectFields: [{
              name: 'sum',
              label: 'Сумма',
              placeholder: 'Сумму печатать тут',
              type: ActionType.text,
            }, {
              name: 'goal',
              label: 'Цель',
              placeholder: 'Цель печатать тут',
              type: ActionType.text,
            }],
          },
        },
      ],
    },
    {
      id: 'team',
      name: 'Команда',
      slideType: SLIDE_TYPES?.COMPETITORS_SPLASH,
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
              name: 'experience',
              label: 'Опыт',
              placeholder: 'Опыт/пояснение/описание здесь',
              type: ActionType.text,
            }, {
              name: 'image',
              type: ActionType.image,
            }],
          },
        },
      ],
    },
  ],
};