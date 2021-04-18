import React, { useState, useEffect } from "react";
import Tutorial from "../Tutorial";
import MainTest from "../MainTest";
import axios from "axios";

const Test = () => {

    // 테스트 중간 스토리용 리스트
    const storyLists = [
        {
            title: "12월의 주말",
            first_sentence:
                "모처럼 집에서 여유를 즐기고 있다\n밖에서 캐롤이 조용히 창문을 타고 들려온다\n",
            second_sentence:
                "지난 한 해 동안의\n내 발자취를 보기 위해\n다이어리를 펼쳤다\n",
        },
        {
            title: "모임 당일",
            first_sentence:
                "추운 날씨에 맞서기 위해\n옷으로 꽁꽁 싸매고 집을 나섰다\n",
            second_sentence:
                "그러다 길 옆쪽으로\n사람들이 북적북적 모여있는 것을\n발견했다\n",
        },
        {
            title: null,
            first_sentence: "드디어 도착한 집,\n재미있게 놀았나요?\n",
            second_sentence:
                "추위와 싸웠을 당신을 위해\n음료를 한 잔 준비했어요\n",
        },
    ];

    const [story, setStory] = useState(0);  // 스토리 번호
    const [count, setCount] = useState(0);  // 스토리 + 문제 포함 전체 번호
    const [isLoading, setIsLoading] = useState(true);   // 로딩 불리언
    const [questionNum, setQuestionNum] = useState(0);  // 문제 번호
    const [questionList, setQuestionList] = useState([]);   // 문제 DB
    const [selectedMbti, setSelectedMbti] = useState([]);   // 선택한 mbti 값
    const [finalResult, setFinalResult] = useState(""); // calculateResult 함수에서 계산된 값 localstorage에 넣기 위함

    // 문제 DB 가져오고 끝나면 로딩 중단
    useEffect(() => {
        axios.get("https://mern-cafe-mbti.herokuapp.com/get/question").then((response) => {
            setQuestionList(response.data);
            setIsLoading(false);
        });
    }, []);

    // 마지막 질문의 답을 선택하면 여태까지의 선택된 값 배열을 로컬스토리지에 저장시킴.
    // calculateResult 함수로 최종 mbti 값 불러옴
    useEffect(() => {
        if (questionNum == 12) {
            localStorage.setItem("arrayResult", JSON.stringify(selectedMbti));
            calculateResult();
        }
    }, [selectedMbti]);

    // 최종 mbti 값을 로컬스토리지에 저장시킴.
    useEffect(() => {
        localStorage.setItem("fin_result", JSON.stringify(finalResult))
    }, [finalResult])

    // 스토리 진행버튼 누를 때 마다 실행
    const storyHandler = () => {
        setStory(story + 1);
        setCount(count + 1);
    };

    // 질문 선택 버튼 누를 때 마다 실행
    const questionHandler = (e) => {
        setSelectedMbti([...selectedMbti, e.target.value]);
        setQuestionNum(questionNum + 1);
        setCount(count + 1);
    };

    // 결과 리스트로 계산, 결과값 소문자 변환
    const calculateResult = async () => {

        let beforeResult = JSON.parse(localStorage.getItem("arrayResult"));
        let finResult = [];

        (await beforeResult.filter((x) => x == "E")) >
            beforeResult.filter((x) => x == "I")
            ? finResult.push("E")
            : finResult.push("I");
        (await beforeResult.filter((x) => x == "S")) >
            beforeResult.filter((x) => x == "N")
            ? finResult.push("S")
            : finResult.push("N");
        (await beforeResult.filter((x) => x == "T")) >
            beforeResult.filter((x) => x == "F")
            ? finResult.push("T")
            : finResult.push("F");
        (await beforeResult.filter((x) => x == "J")) >
            beforeResult.filter((x) => x == "P")
            ? finResult.push("J")
            : finResult.push("P");

        await setFinalResult(finResult.join("").toLowerCase());
    };

    // 0, 5, 14번째는 스토리 진행, 나머지는 질문지
    if (count == 0 || count == 5 || count == 14) {
        return (
            <>
                <Tutorial
                    story={storyLists[story]}
                    storyHandler={storyHandler}
                    count={count}
                />
            </>
        );
    } else {
        return (
            <>
                {isLoading ? (
                    "loading"
                ) : (
                    <MainTest
                        questionList={questionList}
                        questionNum={questionNum}
                        questionHandler={questionHandler}
                    />
                )}
            </>
        );
    }
};

export default Test;
