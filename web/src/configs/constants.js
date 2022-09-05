export const SLIDE_TYPES = {
  FIRST: 'FirstSlide', 
  AUDITRIUM: 'AuditoriumSlide', 
  PROBLEM: 'ProblemSlide',
  SOLUTION: 'SolutionSlide',
  MARKET: 'MarketSlide1', 
  COMPETITORS_SPLASH: 'CompetitorsSplashSlide',
  COMPETITORS_AND_ALTERNATIVES: 'CompetitorsAndAlternatives',
  DIFFERENCE: 'DifferenceSlide',
  TEAM: 'TeamSlide',
}

export const SLIDE_LIST = [
  SLIDE_TYPES?.FIRST, SLIDE_TYPES?.AUDITRIUM, SLIDE_TYPES?.PROBLEM, SLIDE_TYPES?.SOLUTION,
  SLIDE_TYPES?.MARKET, SLIDE_TYPES?.COMPETITORS_SPLASH,SLIDE_TYPES?.COMPETITORS_AND_ALTERNATIVES, 
  SLIDE_TYPES?.DIFFERENCE, SLIDE_TYPES?.TEAM
];

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