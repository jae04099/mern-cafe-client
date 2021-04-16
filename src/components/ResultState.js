// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// const ResultState = () => {
//     const [resultList, setResultList] = useState([]);
//     const [targetList, setTargetList] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     let mbti_result = JSON.parse(localStorage.getItem("fin_result"))

//     useEffect(() => {
//         axios.get("http://localhost:3001/get/result").then((response) => {
//             setResultList(response.data);
//         })
//     }, [])

//     useEffect(() => {
//         getFinalMbti()
//     }, [resultList])

//     const getFinalMbti = () => {
//         for (let i = 0; i < 16; i++) {
//             if (resultList[i].mbti == mbti_result) {
//                 setTargetList(resultList[i])
//             }
//             break
//         }
//     }
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default ResultState
