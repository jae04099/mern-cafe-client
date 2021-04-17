import React, { useState, useEffect } from "react";
import Tutorial from "../Tutorial";
import MainTest from "../MainTest";
import axios from "axios";

const Test = () => {
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
    const [story, setStory] = useState(0);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [questionNum, setQuestionNum] = useState(0);
    const [questionList, setQuestionList] = useState([]);
    const [selectedMbti, setSelectedMbti] = useState([]);
    const [finalResult, setFinalResult] = useState("");

    useEffect(() => {
        axios.get("https://mern-cafe-mbti.herokuapp.com/get/question").then((response) => {
            setQuestionList(response.data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (questionNum == 12) {
            localStorage.setItem("arrayResult", JSON.stringify(selectedMbti));
            calculateResult();
        }
    }, [selectedMbti]);

    useEffect(() => {
        localStorage.setItem("fin_result", JSON.stringify(finalResult))
    }, [finalResult])

    const storyHandler = () => {
        setStory(story + 1);
        setCount(count + 1);
    };

    const questionHandler = (e) => {
        setSelectedMbti([...selectedMbti, e.target.value]);
        setQuestionNum(questionNum + 1);
        setCount(count + 1);
    };
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

    if (count == 0 || count == 5 || count == 14) {
        return (
            <>
                <Tutorial
                    story={storyLists[story]}
                    storyHandler={storyHandler}
                    count = {count}
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
