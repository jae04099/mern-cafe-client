import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Spinner from "../Spinner"
import axios from "axios";

const Result = () => {
    const [resultList, setResultList] = useState();
    const [targetList, setTargetList] = useState();
    const [reRender, setReRender] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let mbti_result = JSON.parse(localStorage.getItem("fin_result"))

    useEffect(() => {

        axios.get("https://mern-cafe-mbti.herokuapp.com/get/result").then((response) => {
            setResultList(response.data)
        })

    }, [reRender])

    useEffect(async () => {
        setReRender(0)
        await getFinalMbti()
        await (targetList && console.log(targetList))
        if (targetList) {
            setIsLoading(false)
        }
    }, [resultList])

    const getFinalMbti = () => {
        for (let i = 0; i < 16; i++) {
            if (resultList && (resultList[i].mbti == mbti_result)) {
                setTargetList(resultList[i])
                return
            }
        }
        console.log('fail')
    }

    return (
        <>{isLoading ? <Spinner /> : <ResultWrap>
            <h3>나와 어울리는 음료는</h3>
            <MainResult>
                <img src={`/images/coffee/${targetList.image}.png`} alt={targetList.name} />
                <div class="coffee-feat">
                    <p class="feat">{targetList.feature.short}</p>
                    <p class="name">{targetList.name}</p>
                </div>
                <div class="coffee-desc">
                    {targetList.feature.long.split('</br>').map(line => {
                        return (<p>{line.replace(/(<\/?(?:a|p|img)[^>]*>)|<[^>]+>/ig, '')}<br /></p>)
                    })}
                </div>
            </MainResult>
            <ResultFriend>
                <p class="best_title">연말에 생각 날 최고의 궁합</p>
                <ul>
                    <li onclick="">
                        <img
                            src={`/images/coffee/${targetList.friends[0].image}.png`}
                            alt={targetList.friends[0].name}
                        />
                        <span>
                            {targetList.friends[0].desc.split('</p>').map(line => {
                                return (<p>{line.replace(/(<\/?(?:a|p|img)[^>]*>)|<[^>]+>/ig, '')}</p>)
                            })}
                        </span>
                    </li>
                    <li onclick="location.href = '/result/14'">
                        <img
                            src={`/images/coffee/${targetList.friends[1].image}.png`}
                            alt={targetList.friends[1].name}
                        />
                        <span>
                            {targetList.friends[1].desc.split('</p>').map(line => {
                                return (<p>{line.replace(/(<\/?(?:a|p|img)[^>]*>)|<[^>]+>/ig, '')}</p>)
                            })}
                        </span>
                    </li>
                </ul>
            </ResultFriend>
            <Link to="/">
                <ReturnBtn>
                    테스트 다시 하러가기
            </ReturnBtn>
            </Link>
        </ResultWrap>
        }</>
    );
};

export default Result;

const ResultWrap = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
font-family: "Cafe24Oneprettynight";
color: #3a1a00;
padding: 50px 30px;
overflow-y: scroll;
overflow-x: hidden;
width: 100%;
height: 100%;
background: url(../../images/background/background.png);
h3{
    margin: 30px 0;
    text-align: center;
font-size: 2rem;
}
a {
    display: flex;
    text-align: center;
    width: 100%;
}
`;

const MainResult = Styled.div`
    display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
img {
    width: 220px;
}

.coffee-feat {
    text-align: center;
    margin: 15px 0 35px 0;
    .feat {
        font-size: 1.7rem;
        margin-bottom: 10px;
        color: #b56467;
    }
    .name {
        font-size: 2.7rem;
    }
}

.coffee-desc p {
    line-height: 1.5rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
}
`;
const ResultFriend = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p.best_title {
    font-size: 1.5rem;
    margin : 10px 0 30px 0;
}
img {
    width: 130px;
}

ul {
    display: flex;
    li{

        display: flex:
        align-items: center;
        justify-content: center;
text-align: center;
    }
}
`;

const ReturnBtn = Styled.button`
margin: 50px;
padding: 1rem 0;
font-size: 1.5rem;
height: 5rem;
width: 100%;
font-family: "Cafe24Oneprettynight";
background-color: beige;
border: none;
`;
