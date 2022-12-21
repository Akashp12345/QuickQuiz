import "./App.css"
import "./game.css"
import offline from "./images/images.png"
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import { Offline, Online } from "react-detect-offline"
import Final from "./Final"

export default function Game() {
    const [qstn, setQstn] = useState([])
    const [flag, setFlag] = useState(false)
    let [Qno, setQno] = useState(0)
    const [count, setCount] = useState(1)
    const [Score, setScore] = useState(0)


    const data = useSelector(state => state.data)
    const { qstndta } = data
    useEffect(() => {
        let arr = []
        arr.push(qstndta[Qno].correct_answer, ...qstndta[Qno].incorrect_answers)

        for (let i = arr.length - 1; i >= 0; i--) {
            let no = Math.floor(Math.random() * (i + 1))
            let temp = arr[i]
            arr[i] = arr[no]
            arr[no] = temp
        }
        setQstn(arr)
    }, [Qno,qstndta])




    const CheckAnsw = (value) => {

        setFlag(!flag)
        if (decodeURIComponent(qstndta[Qno].correct_answer) == value) {
            setScore(Score + 10)
        }
        if (Qno != qstndta.length - 1) {
            setTimeout(() => {
                setCount(count + 1)
                setQno(Qno + 1)
                setFlag(false)
            }, 1000)
        }
        if (count == qstndta.length) {
            setTimeout(() => {

                setCount(count + 1)
            }, 1500)
        }

    }


    return (
        <div className="container">
            {console.log(Qno)}
            <Online>
                {count !== qstndta.length + 1 ? <div id="game" className="justify-center flex-column">
                    <h2 id="question">{decodeURIComponent(qstndta[Qno].question)}</h2>
                    <div className="Qsn">
                        <h3>Q.No.:{count}/{qstndta.length}</h3>
                        <h3>Score:{Score}</h3>
                    </div>
                    <div className="choice-container">

                        <p className="choice-prefix">A</p>
                        <button className="choice-text" onClick={() => CheckAnsw(decodeURIComponent(qstn[0]))} style={{ ...decodeURIComponent(qstn[0]) == decodeURIComponent(qstndta[Qno].correct_answer) && flag ? { boxShadow: "5px 5px 5px green" } : { boxShadow: "5px 5px 5px red" }, ...!flag ? { boxShadow: "none" } : {} }}>{decodeURIComponent(qstn[0])}</button>
                    </div>
                    <div className="choice-container">
                        <p className="choice-prefix">B</p>
                        <button className="choice-text" onClick={() => CheckAnsw(decodeURIComponent(qstn[1]))} style={{ ...decodeURIComponent(qstn[1]) == decodeURIComponent(qstndta[Qno].correct_answer) && flag ? { boxShadow: "5px 5px 5px green" } : { boxShadow: "5px 5px 5px red" }, ...!flag ? { boxShadow: "none" } : {} }}>{decodeURIComponent(qstn[1])}</button>
                    </div>
                    <div className="choice-container">
                        <p className="choice-prefix">C</p>
                        <button className="choice-text" onClick={() => CheckAnsw(decodeURIComponent(qstn[2]))} style={{ ...decodeURIComponent(qstn[2]) == decodeURIComponent(qstndta[Qno].correct_answer) && flag ? { boxShadow: "5px 5px 5px green" } : { boxShadow: "5px 5px 5px red" }, ...!flag ? { boxShadow: "none" } : {} }}>{decodeURIComponent(qstn[2])}</button>
                    </div>
                    <div className="choice-container">
                        <p className="choice-prefix">D</p>
                        <button className="choice-text" onClick={() => CheckAnsw(decodeURIComponent(qstn[3]))} style={{ ...decodeURIComponent(qstn[3]) == decodeURIComponent(qstndta[Qno].correct_answer) && flag ? { boxShadow: "5px 5px 5px green" } : { boxShadow: "5px 5px 5px red" }, ...!flag ? { boxShadow: "none" } : {} }}>{decodeURIComponent(qstn[3])}</button>
                    </div>
                </div> : <Final count={count} Score={Score} />}
            </Online>
            <Offline>
                <div className="container">
                    <img src={offline} alt="Offline" className="offline" />
                    <center><h1>Please Check internet connection !</h1></center>
                </div>
            </Offline>

        </div>
    )
}