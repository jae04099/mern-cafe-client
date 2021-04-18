import React from "react";
import Styled from "styled-components";

function Question({ questionList }) {
    return (
        <QuestionWrap>
            <i className={questionList.icon}></i>
            <h3>
                {questionList.question.split('</br>').map((line, index) => {
                    return (<React.Fragment key={index}>{line}<br /></React.Fragment>)
                })}
            </h3>
        </QuestionWrap>
    );
}

export default Question;

const QuestionWrap = Styled.div`
width: 100%;
height: 55%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 i{
     color: #b56467;
     font-size: 2rem;
     margin-bottom: 2rem;
 }
 h3 {
    text-align: center;
    font-family: "UhBeeBEOJJI";
    color: #3a1a00;
    font-size: 2.7rem;
    line-height: 3.4rem;
 }
 @media only screen and (max-width: 576px) {
    align-items: top;
    height: 40%;
    h3 {
        font-size: 2.2rem;
    }
  }

`;