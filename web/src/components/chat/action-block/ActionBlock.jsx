/* eslint-disable react/prop-types */
import React from 'react';
import TextActionBlock from './TextActionBlock';
import { ActionType } from '../../../configs/scenarios';
import TextArrayActionBlock from './TextArrayActionBlock';
import ObjectArrayActionBlock from './ObjectArrayActionBlock';
import SelectMultipleActionBlock from './SelectMultipleActionBlock';
import ObjectActionBlock from './ObjectActionBlock';
import SelectSingleActionBlock from './SelectSingleActionBlock';
import CostsActionBlock from './CostsActionBlock';
import UnitEconomyActionBlock from './UnitEconomyActionBlock';

function ActionBlock({
  actionType, actionName, payload, onChange, answers,
}) {
  switch (actionType) {
    case ActionType.text:
      return <TextActionBlock actionName={actionName} onChange={onChange} />;
    case ActionType.textArray:
      return <TextArrayActionBlock actionName={actionName} payload={payload} onChange={onChange} />;
    case ActionType.objectArray:
      return (
        <ObjectArrayActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
          answers={answers}
        />
      );
    case ActionType.selectMultiple:
      return (
        <SelectMultipleActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
        />
      );
    case ActionType.selectSingle:
      return (
        <SelectSingleActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
        />
      );
    case ActionType.object:
      return (
        <ObjectActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
        />
      );
    case ActionType.costs:
      return (
        <CostsActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
        />
      );
    case ActionType.unitEconomy:
      return (
        <UnitEconomyActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
        />
      );
    default:
      throw new Error(`Action type "${actionType}" does not exists`);
  }
}

export default ActionBlock;
