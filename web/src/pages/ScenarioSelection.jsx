import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
  Backdrop, List, ListItemButton, ListSubheader,
} from '@mui/material';
import { rgba } from 'polished';
import { useHistory } from 'react-router-dom';
import initScenarios from '../configs/scenarios';

const BlackBackground = styled(Backdrop)`
  &.MuiBackdrop-root {
    background: ${rgba('#2E3135', 0.8)};
    padding: 16px;
  }
`;

const GoalPanel = styled(List)`
  width: 100%;
  max-width: 350px;
  border-radius: 16px;
  background: #FFFFFF;
  align-self: flex-end;
  
  .MuiPopover-paper {
    width: 100%;
    max-width: 350px;
    border-radius: 16px;
  }
  
  .MuiListSubheader-root {
    background: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #2E3135;
    padding: 16px;
  }
  
  .MuiListItemButton-root {
    height: 56px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2E3135;
  }
`;

const NewDesc = styled.span`
  margin-left: 5px;
  color: #9191A1;
`;

// eslint-disable-next-line react/prop-types
function ScenarioSelection() {
  const scenarios = useMemo(() => initScenarios, []);
  const history = useHistory();

  const onChooseScenario = (scenarioId) => () => {
    history.push(`/constructor/${scenarioId}`);
  };

  return (
    <BlackBackground
      open
    >
      <GoalPanel
        subheader={(
          <ListSubheader component="div">
            Цель презентации
          </ListSubheader>
        )}
      >
        {scenarios?.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={onChooseScenario(item.numId)}
          >
            {item.name}
            <NewDesc>{item?.numId == 2 && ' (В разработке)'}</NewDesc>
          </ListItemButton>
        ))}
      </GoalPanel>
    </BlackBackground>
  );
}

export default ScenarioSelection;
