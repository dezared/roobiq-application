/* eslint-disable no-unused-vars */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom' ;
import initScenarios, { ActionType as AnswerType } from '../configs/scenarios';
import ActionBlock from '../components/chat/action-block/ActionBlock';
import ChatBlockComponent from '../components/chat/ChatBlock';
import Button from '../components/controls/Button';
import TabsContainer from '../components/TabsContainer';
import Modal from '@mui/material/Modal';
import CheckPresentation from '../components/CheckPresentation'
import ViewPresentation from './ViewPresentation';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 40px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ChatBlock = styled(ChatBlockComponent)`
  width: 100%;
  margin-bottom: 32px;
  overflow: hidden;
  flex: 1;
`;

const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 16px;
`;

// eslint-disable-next-line react/prop-types
function Chat() {
  const scenario = useMemo(() => initScenarios[1], []);

  const [stepIndex, setStepIndex] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState([[]]);

  const currentStep = useMemo(
    () => scenario.steps[stepIndex],
    [scenario, stepIndex],
  );

  const currentQuestion = useMemo(
    () => currentStep.questions[questionIndex],
    [currentStep, questionIndex],
  );

  const getStatusByIndex = useCallback((index) => {
    if (index < stepIndex) return 'prev';
    if (index > stepIndex) return 'next';

    return 'current';
  }, [stepIndex]);

  const tabs = useMemo(
    () => scenario.steps
      .sort((a, b) => a.order - b.order)
      .map((item, index) => ({
        status: getStatusByIndex(index),
        id: item.id,
        index,
        children: item.name,
      })),
    [scenario.steps, getStatusByIndex],
  );

  const chat = useMemo(
    () => {
      const newChat = [];
      if (stepIndex === 0) {
        newChat.push({
          question: 'Расскажи мне о цели презентации пожалуйста',
          answer: 'Привлечь инвестора',
          id: 'first',
          answerType: AnswerType.text,
        });
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const question of currentStep.questions) {
        if (!answers[answers.length-1].find(m => m[question.id])) { // если нет ответа с этим questions.id
          newChat.push({ question: question.question, id: question.id, payload: question.payload }); // отправляем вопрос
          return newChat; // возврашаем
        }

        newChat.push({ // пушим ответ пользователя
          question: question.question,
          answer: answers[answers.length-1].find(m => m[question.id])[question.id],
          answerType: question.answerType,
          payload: question.payload,
          id: question.id,
        });
      }

      if (currentStep.questions.length == questionIndex) {
        newChat.push({
          question: 'Ты молодец! Мы заполнили секцию ✅',
          id: 'nice',
          answerType: AnswerType.text,
        });
        newChat.push({
          question: 'Посмотри, что получилось или давай двигаться дальше)',
          id: 'next',
          answerType: AnswerType.text,
        });
      }

      return newChat;
    },
    [currentStep.questions, answers, stepIndex, questionIndex],
  );

  const onActionChange = (obj) => {
    let newAnswers = [...answers];
    newAnswers[newAnswers.length - 1].push(obj);
    setAnswers(newAnswers);
    setQuestionIndex(questionIndex + 1);
  };

  const onNextTab = () => {
    if(tabs.length > stepIndex + 1)
    {
      answers.push([]);
      setStepIndex(stepIndex + 1);
      setQuestionIndex(0);
    }
    else {
      // END
      console.log(answers)
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = () => {
    setOpen(!open)
 }

 const [openPresentationCompleteViewer, setopenPresentationCompleteViewer] = React.useState(false);
  const handleOpenPresentationCompleteViewer = () => handleChangePresentationCompleteViewer(true);
  const handleClosePresentationCompleteViewer = () => handleChangePresentationCompleteViewer(false);

  const handleChangePresentationCompleteViewer = () => {
    setopenPresentationCompleteViewer(!openPresentationCompleteViewer)
 }

  return (
    <Wrap>
      <Content>
        <TabsContainer tabs={tabs} currentIndex={stepIndex} />
        <ChatBlock chat={chat} />
        {currentQuestion ? (
          <ActionBlock
            actionType={currentQuestion.answerType}
            actionName={currentQuestion.id}
            answers={answers[answers.length - 1]}
            onChange={onActionChange}
            payload={currentQuestion.payload}
          />
        ) : (
          <div>
            <BtnGroup>
              {stepIndex + 1 >= tabs.length ? (
                <Button onClick={handleChangePresentationCompleteViewer}>Закончить создание</Button>
              ) : (
                <>
                  <Button onClick={handleOpen}>Смотреть</Button>
                  <Button color="secondary" onClick={onNextTab}>Продолжить создание</Button>  
                </>
              )}
            </BtnGroup>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <div>
                <CheckPresentation answers={answers} handleChange={handleChange} сurrentStep={stepIndex}></CheckPresentation>
              </div>
            </Modal>

            <Modal
              open={openPresentationCompleteViewer}
              onClose={handleClosePresentationCompleteViewer}
              sx={{ overflow: "scroll" }}
            >
              <div>
                <ViewPresentation answers={answers} handleChange={handleChangePresentationCompleteViewer}></ViewPresentation>
              </div>
            </Modal>
          </div>
        )}

      </Content>
    </Wrap>
  );
}

export default Chat;