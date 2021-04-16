import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    /* 공통 스타일 */
    font-family: "Noto Sans KR", sans-serif;
    border-radius: 10px;
    cursor: pointer;
    /* 크기 */
    border: 2.5px solid;
    font-size: 1.3rem;
    margin-top: 40px;
    padding: 0.5rem;
    width: 60%;

    /* 색상 */
    color: #3a1a00;
    border-color: #874e20;
    background: #ffffff;
    box-shadow: 2px 2px 5px 1px rgba(63, 7, 7, 0.2);
    &:focus {
        color: #ffffff;
        background: #874e20;
        border-color: #874e20;
        outline: 0;
    }

    /* 기타 */
`;

function Button({ children, ...rest }){
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
