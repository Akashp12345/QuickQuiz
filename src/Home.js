import "./App.css"
import offline from "./images/images.png"
import { useNavigate } from "react-router-dom"
import { Offline, Online } from "react-detect-offline"
export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <Online>
                <div id="home" className="flex-center flex-column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavctop2A5XQSes0J0SZ4xGAuKSC0-qxMbvQ&usqp=CAU" alt="Brain Power" className="brainimoji" />
                    <h1>Quick Quiz</h1>
                    <button className="btn" onClick={() => navigate("/game")}>Play</button>
                </div>
            </Online>
            <Offline>
                <div className="container">
                    <img src={offline} alt="Offline" className="offline" />
                    <center><h1> Please Check internet connection !</h1></center></div>
            </Offline>
        </div>
    )
}