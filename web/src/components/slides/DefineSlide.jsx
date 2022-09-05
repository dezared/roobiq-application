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

export const DefineSlide = ({type, answers}) => {
  switch (type) {
    case SLIDE_TYPES?.FIRST: 
      return <FirstSlide title={answers[0][0]["project_name"]} desc={answers[0][1]["project_description"]}></FirstSlide>;
    case SLIDE_TYPES?.AUDITRIUM:
      return <AuditoriumSlide
      desc={answers[1][1]["segments_short_description"]}
      list={answers[1][0]["audience_segments"].map(function(v, index){ return { desc: v, index: index }; })}
  ></AuditoriumSlide>;
    case SLIDE_TYPES?.PROBLEM:
      return <ProblemSlide title={"Проблема: " + answers[2][0]["problem"]}
      titleList={answers[2][1]["problem_details"].map(function(v, index){ return { desc: v, index: index }; })}
      leftTitle={answers[2][2]["problem_short_description"]}></ProblemSlide>;
    case SLIDE_TYPES?.SOLUTION: 
      return <SolutionSlide title={answers[3][0]["product_feature"]}
        solutionList={
          answers[3][1]["audience_segments"].map(function(v, index) { return {
               id: index,
               SolutionItemIcon: index,
               SolutionItemTitle: v.name,
               SolutionItemList: { desc: v.description, index: index} 
               }})}></SolutionSlide>;
    case SLIDE_TYPES?.MARKET: 
      return <MarketSlide1 title={"Рынок: " + answers[4][0]["market_segments"].join(", ")}
      sources={answers[4][1]["market_tam"].source.concat(answers[4][2]["market_sam"].source, answers[4][3]["market_som"].source).split('').join(", ")}
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
      ></MarketSlide1>;
    case SLIDE_TYPES?.COMPETITORS_SPLASH: 
      return <CompetitorsSplashSlide></CompetitorsSplashSlide>;
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
      return <TeamSlide people={answers[6][0]["members"].map(function(v) {
        return { name: v.name, job: v.role, desc: v.experience, imageSrc: encodeImageFileAsURL(v.image) }
    })}></TeamSlide>;
    default:
      return null;
  }
}