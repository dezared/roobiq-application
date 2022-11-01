import React from "react";
import { SLIDE_TYPES } from "../../configs/constants";
import FirstSlide from "./FirstSlide";
import AuditoriumSlide from "./AuditoriumSlide";
import CompetitorsAndAlternatives from "./CompetitorsAndAlternatives";
import CompetitorsSplashSlide from "./CompetitorsSplashSlide";
import DifferenceSlide from "./DifferenceSlide";
import MarketSlide1 from "./MarketSlide1";
import SolutionSlide from "./SolutionSlide";
import TeamSlide from "./TeamSlide";
import ProblemSlide from "./ProblemSlide";
import BusinessModel from "./BusinessModel";

function encodeImageFileAsURL(file) {
  try
  {
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

export const DefineSlide = ({slideQuestions, type, answers, slideIndex}) => {

  const slideAnswer = answers[slideIndex];

  const slideProps = {
    data: slideAnswer,
    slideQuestions: slideQuestions,
  }

  switch (type) {
    case SLIDE_TYPES?.FIRST: 
      return <FirstSlide {...slideProps} />;
    case SLIDE_TYPES?.AUDITRIUM:
      return <AuditoriumSlide {...slideProps} />;
    case SLIDE_TYPES?.PROBLEM:
      return <ProblemSlide {...slideProps} />;
    case SLIDE_TYPES?.SOLUTION: 
      return <SolutionSlide {...slideProps} />;
    case SLIDE_TYPES?.MARKET: 
      return <MarketSlide1 {...slideProps} />;
    case SLIDE_TYPES?.BUSINESS: 
      return <BusinessModel {...slideProps} />;
    case SLIDE_TYPES?.COMPETITORS_SPLASH: 
      return <CompetitorsSplashSlide />;
    case SLIDE_TYPES?.COMPETITORS_AND_ALTERNATIVES:
      return <CompetitorsAndAlternatives competitors={answers[5][1]["direct_competitors"].map(function(v, index) { return { id: index, name: v.name }})}
      properties={answers[5][0]["competitors_properties"]}
      massive={
          answers[5][0]["competitors_properties"].map((val, index_x) => {
              var mass = []
              mass.push(answers[5][1]["direct_competitors"].map(function(v, index_y) {
                  var flag = false;
                  var key = index_x + "-" + index_y;
                  if(v.properties.find(m => m === val))
                      flag = true;
                  
                  return { key: key, flag: flag }
              }))

              return mass;
          })[0] 
      }></CompetitorsAndAlternatives>;
    case SLIDE_TYPES?.DIFFERENCE:
      return <DifferenceSlide solution={answers[5][2]["competitors_difference"]}></DifferenceSlide>;
    case SLIDE_TYPES?.TEAM:
      return <TeamSlide {...slideProps} />;
    default:
      return null;
  }
}