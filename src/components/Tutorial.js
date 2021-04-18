import React from "react";
import Snow from "./Snow";
import styled, { keyframes } from "styled-components";
import NextBtn from './StoryBtn'

function Tutorial({ story, storyHandler, count }) {
    return (
        <Wrap>
            <Snow />
            <StoryWrap>
                <h3>{story.title}</h3>
                <p>
                    {story.first_sentence.split('\n').map(line => {
                        return (<>{line}<br /></>)
                    })}
                </p>
                <p>
                    {story.second_sentence.split('\n').map(line => {
                        return (<>{line}<br /></>)
                    })}
                </p>
            </StoryWrap>
            <ButtonWrap>
                <NextBtn storyHandler={storyHandler} count={count} />
            </ButtonWrap>
        </Wrap>
    );
}

const Fade = keyframes`
    from {transform: translateY(30px); opacity: 0;}
    to { transform: translateY(0px); opacity: 1;}
`;


const Wrap = styled.div`
    background: #9f3337;
    width: 100vh;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StoryWrap = styled.div`
    text-align: center;
    font-family: "UhBeeBEOJJI";
    color: #ffffff;
    h3 {
        font-size: 3rem;
        margin-bottom: 2rem;
        animation: ${Fade} 0.7s linear alternate;
        animation-delay: 0s;
    }
    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        line-height: 2.5rem;
        animation: ${Fade} 0.7s linear alternate;
        animation-delay: 0.5s;
    }
`;

const ButtonWrap = styled.div``;

export default Tutorial;
