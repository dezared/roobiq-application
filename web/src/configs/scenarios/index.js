import { findTeam } from "./scenario/findTeam";
import { getInvestments } from "./scenario/getInvestments";

export const ActionType = {
  text: 'Text',
  checkboxArray: 'CheckboxArray',
  textArray: 'TextArray',
  textArrayForm: 'textArrayForm',
  objectArray: 'ObjectArray',
  selectMultiple: 'SelectMultiple',
  selectSingle: 'SelectSingle',
  object: 'Object',
  image: 'Image',
  costs: 'Costs',
  unitEconomy: 'UnitEconomy',
};

const scenarios = [
  getInvestments, 
  findTeam,
];

export default scenarios;