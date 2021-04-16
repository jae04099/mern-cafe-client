import React from 'react'
import styled from 'styled-components'
import ProgBar from './ProgBar'
import Question from './Question'
import ChoiceBtn from './ChoiceBtn'

function MainTest({questionList, questionNum, questionHandler}) {
    return (
        <TestWrap>
            <ProgBar questionNum={questionNum}/>
            <Question questionList={questionList[questionNum]}/>
            <ChoiceBtn questionList={questionList[questionNum]} questionHandler={questionHandler}/>
        </TestWrap>
    )
}

export default MainTest

const TestWrap = styled.div`
width: 100vh;
height: 100vh;
background-image: url("./images/background/background.png");
`;