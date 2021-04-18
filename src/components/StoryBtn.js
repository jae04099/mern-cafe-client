import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, Route, BrowserRouter as Router } from "react-router-dom"


function StoryBtn({ storyHandler, count }) {
    if (count == 14) {
        return (
            <Link to="/result"><ResultBtn><img src="/images/background/cup-btn.png"></img></ResultBtn></Link>
        )

    } else {
        return (

            <NextBtn onClick={storyHandler}>
                next<i className="fas fa-angle-double-right"></i>
            </NextBtn>)
    }

}

export default StoryBtn

const NextBtn = styled.button`
position: absolute;
font-family: "UhBeeBEOJJI";
font-size: 2rem;
color: white;
background: transparent;
border: none;
right: 20px;
bottom: 100px;
/* animation: 0.7s linear alternate;
        animation-delay: 2s; */
`;

const ResultBtn = styled.button`
position: relative;
cursor: pointer;
background: none;
border: none;
outline: none;
z-index: 300;
&:active, &:focus {
    outline: none;
}
img {
    width: 260px;
    cursor: pointer;
}
`;
