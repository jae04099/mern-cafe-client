import React from 'react'
import Styled from 'styled-components'

function ChoiceBtn({ questionList, questionHandler }) {
    return (
        <SelectSecWrap>
            <SelectBtn onClick={questionHandler} value={questionList.alpa_result.first}>
                {questionList.select_list.first.split('</br>').map((line, index) => {
                    return (<React.Fragment key={index}>{line}<br /></React.Fragment>)
                })}
            </SelectBtn>
            <SelectBtn onClick={questionHandler} value={questionList.alpa_result.second}>
                {questionList.select_list.second.split('</br>').map((line, index) => {
                    return (<React.Fragment key={index}>{line}<br /></React.Fragment>)
                })}
            </SelectBtn>
        </SelectSecWrap>
    )
}

export default ChoiceBtn



const SelectSecWrap = Styled.div`
width: 100%;
height: 30%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
transition: all 0.3s ease-out;
@media only screen and (max-width: 576px) {
    align-items: top;
    height: 40%;
  }
`;

const SelectBtn = Styled.button`
    font-family: "Noto Sans KR", sans-serif;
    border-radius: 10px;
    transition: all 0.3s ease-out;
    cursor: pointer;
    /* 크기 */
    border: 2.5px solid;
    font-size: 1rem;
    margin-top: 20px;
    padding: 0.5rem;
    width: 70%;
    height: 100px;

    /* 색상 */
    color: #3a1a00;
    border-color: #874e20;
    background: #ffffff;
    box-shadow: 2px 2px 5px 1px rgba(63, 7, 7, 0.2);
    &:active {
        color: #ffffff;
        background: #874e20;
        border-color: #874e20;
        outline: 0;
    }
    &:focus {
        outline: 0;
    }

    @media only screen and (max-width: 576px) {
        width: 90%;
        font-size: 1.1rem;
      }
`;