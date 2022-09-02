/* eslint-disable no-unused-vars,react/prop-types */
import React, { Fragment, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Avatar from '../controls/Avatar';
import { ActionType } from '../../configs/scenarios';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */


  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const MessageBlock = styled.div`
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2E3135;
  border-radius: 16px;
  display: inline-block;
`;

const QuestionBlock = styled(MessageBlock)`
  background: #F8F8F8;
`;

const AnswerBackground = styled(MessageBlock)`
  background: #E6EBF9;
  display: flex;
  flex-direction: column;
`;

const QuestionBlockWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const AnswerBlockWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

const ListItem = styled.div`
  //display: flex;
  //flex-direction: column;
  position: relative;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: -4px;
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
  }
`;

const Field = styled.span`
  display: inline-block;
`;

const getFieldContent = (field, item) => {
  switch (field.type) {
    case ActionType.text:
      return `${field.label}: ${item[field.name]}`;
    case ActionType.checkboxArray:
      return `${field.label}: ${item[field.name].join(', ') || '-'}`;
    case ActionType.image:
      return null;
    case ActionType.textArrayForm:
      return `${field.label}: ${item[field.name]}`;
    default:
      throw new Error(`Answer type "${field.type}" does not exists`);
  }
};

function AnswerBlock({ answerType, answer, payload }) {
  switch (answerType) {
    case ActionType.text:
    case ActionType.selectSingle: 
      return <AnswerBackground>{answer}</AnswerBackground>;
    case ActionType.costs:
    case ActionType.unitEconomy:
      return <AnswerBackground>{payload.answer}</AnswerBackground>;
    case ActionType.textArray:
      return (
        <AnswerBackground>
          <List>
            {answer.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{item}</li>
            ))}
          </List>
        </AnswerBackground>
      );
    case ActionType.selectMultiple:
      return (
        <AnswerBackground>
          <List>
            {answer.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{item}</li>
            ))}
          </List>
        </AnswerBackground>
      );
    case ActionType.objectArray:
      return (
        <AnswerBackground>
          <List>
            {answer.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ListItem key={index}>
                {payload.objectFields.map((field) => (
                  <Fragment key={field.name}>
                    <Field>
                      {getFieldContent(field, item)}
                    </Field>
                  </Fragment>
                ))}
              </ListItem>
            ))}
          </List>
        </AnswerBackground>
      );
    case ActionType.object:
      return (
        <AnswerBackground>
          {payload.objectFields.map((field) => (
            <Field key={field.name}>
              {`${field.label ? `${field.label}: ` : ''}${answer[field.name]}`}
            </Field>
          ))}
        </AnswerBackground>
      );
    default:
      throw new Error(`Answer type "${answerType}" does not exists`);
  }
}

// eslint-disable-next-line react/prop-types
function ChatBlock({ chat, className }) {
  const innerRef = useRef();

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    innerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    innerRef.current.scrollTop = innerRef.current.scrollHeight;
  }, [chat]);

  return (
    <Wrap className={className}>
      <Inner ref={innerRef}>
        {
          chat.map((row) => (
            <Fragment key={row.id}>
              <QuestionBlockWrap>
                <Avatar color="#7A94DF">R</Avatar>
                <QuestionBlock>{row.question}</QuestionBlock>
              </QuestionBlockWrap>
              {row.answer
                ? (
                  <AnswerBlockWrap>
                    <AnswerBlock
                      answer={row.answer}
                      answerType={row.answerType}
                      payload={row.payload}
                    />
                  </AnswerBlockWrap>
                )
                : null}
            </Fragment>
          ))
        }
      </Inner>
    </Wrap>
  );
}

export default ChatBlock;
