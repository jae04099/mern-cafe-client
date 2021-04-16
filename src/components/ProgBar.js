import React, { useState, useEffect } from "react";
import Styled, { ThemeProvider } from "styled-components";

function ProgBar({ questionNum }) {
    const iconPercentage = {
        percentage: questionNum,
    };
    return (
        <ThemeProvider theme={iconPercentage}>
            <BarContainer>
                <Progress>
                    <Percentage>
                        <i className="fas fa-mug-hot"></i>
                    </Percentage>
                </Progress>
            </BarContainer>
        </ThemeProvider>
    );
}

export default ProgBar;

const BarContainer = Styled.div`
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 576px) {
    align-items: top;
    height: 15%;
  }
`;

const Progress = Styled.div`
width: 50%;
height: 0.5rem;
background: #999999;
margin-top: 2rem;
border-radius: 1rem;
@media only screen and (max-width: 576px) {
    width: 60%;
  }
`;

const Percentage = Styled.div`
transition: all 0.3s ease-out;
width: ${props => props.theme.percentage*9}%;
height: 0.5rem;
background: #b56467;
position: relative;
border-radius: 1rem;
i {
    position: absolute;
    font-size: 2rem;
    color: #b56467;
    top: -17px;
    right: -13px;
    text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    -webkit-text-stroke: 0.2px #ffffff
}
`;
