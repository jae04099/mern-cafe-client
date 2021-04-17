import React from "react";
import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom";
import Button from "../Button";

const Start = () => {
    return (
        <StartWrap>
            <StartMain>
                <Contents>
                    <span className="icon">
                        <img
                            src="/images/background/coffee-solid.svg"
                            alt="coffeecup"
                        />
                    </span>
                    <h3>
                        나와 어울리는
                        <br />
                        카페 음료는?
                        <br />
                    </h3>
                    <p>
                        추운 겨울
                        <br />
                        나의 얼어버린 손과 마음을
                        <br />
                        녹여줄 심리테스트
                        <br />
                    </p>
                    <Link to='/test'>
                    <Button>시작하기</Button>
                    </Link>
                </Contents>
            </StartMain>
        </StartWrap>
    );
};

const Fade = keyframes`
    from {transform: translateY(30px); opacity: 0;}
    to { transform: translateY(0px); opacity: 1;}
`;

const StartWrap = styled.div`
    width: 100%;
    height: 100%;
    background: url("./images/background/red_back2.svg");
    background-size: cover;
    background-repeat: no-repeat;
`;

const StartMain = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("./images/background/snowflake.svg");
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 9rem 0 0 0;
    img {
        width: 3rem;
    }
    h3 {
        font-family: "UhBeeBEOJJI";
        margin-top: 20px;
        font-size: 2.7rem;
        animation: ${Fade} 0.7s linear alternate;
  }
    
    p {
        margin-top: 20px;
        text-align: center;
        font-family: "Noto Sans KR", sans-serif;
        line-height: 1.5rem;
    }

    a {
        width: 100%;
        text-align: center;
    }
`;
export default Start;
