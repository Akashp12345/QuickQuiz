import { useEffect, useState } from "react"
import axios from 'axios'
import offline from "./images/images.png"
import { useSelector, useDispatch } from "react-redux"
import { Online, Offline } from "react-detect-offline"
import { useNavigate } from "react-router-dom"
import { add } from "./Data/Reducer"
export default function Page2() {
    const [number, setNumber] = useState(10)
    const [difficulty, setDifficulty] = useState("")
    const [Type, setType] = useState(0)
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const { qstndta, Difficulty, Category } = data
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=${number}&category=${Type}&difficulty=${difficulty}&type=multiple&encode=url3986`,)
            .then(res => {
                if (res.data.response_code == 0) {
                    dispatch(add(res.data.results))
                    console.log(res.data)
                }
                else {
                    setError("No Data Available")
                }
            }).catch(Error => {
                console.log(Error)
            })
    }, [Type, difficulty, number,dispatch])

    const StartGame = () => {
        if (qstndta.length !== 0 && error !== "No Data Available") {
            navigate("/game1")
        }
        else {
            setError("No Data Available", "true")
        }
    }
    return (
        <div className="container">
            {console.log(qstndta, difficulty)}
            <Online>
                <div id="home" className="flex-center flex-column">
                    <img src="https://i.pinimg.com/originals/47/df/3b/47df3b70e39a42c70cb59d9e9f30f023.jpg" alt="Brain Power" className="brainimoji" />
                    <h1>Try Brain Power !</h1>
                    <h3>No of Questions</h3>
                    <input type="number" className="P2_select" max={50} min={10} onChange={(e) => { setNumber(e.target.value); setError("") }} defaultValue={10} />
                    <h3> Questions Category</h3>
                    <select className="P2_select" onChange={(e) => { setType(e.target.value); setError("") }} >
                        {Category.map(item => <option key={item.id} value={item.id}>{item.type}</option>)}
                    </select>
                    <h3>Questions Difficulty</h3>
                    <select className="P2_select" onChange={(e) => { setDifficulty(e.target.value); setError("") }} >
                        {Difficulty.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                    <label style={{ color: "red", marginTop: "15px", fontSize: "15px" }}>{error}</label>
                    <div>
                        <button className="btn1" onClick={() => navigate("/")}>Back </button>
                        <button className="btn1" onClick={() => StartGame()}>Start </button>
                    </div>

                </div>
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