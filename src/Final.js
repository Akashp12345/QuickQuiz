
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { add } from "./Data/Reducer"
import { useState, useEffect } from "react"
export default function Final({ count, Score }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    useEffect(() => {
        if (Score >= 90) {
            setMsg("Wow ,Excellent Brain Power")
        }
        else if (Score <= 80 && Score >= 70) {
            setMsg("Yes,Average Brain Power")
        } else if (Score <= 70 && Score >= 50) {
            setMsg("Need Brain Exersice !")
        }
        else if (Score <= 50 && Score >= 30) {
            setMsg("Nice Try !")
        }
        else {
            setMsg("Your are Fail !")
        }

    }, [Score])
    const Home = () => {
        let arr = []
        dispatch(add(arr))
        navigate("/")
    }
    return (
        <div className="final">
            <h2>Hey Player</h2>
            <h3>Your Score is <b>{Score}</b></h3>
            {Score >= 50 ?
                <div className="final"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowpGyEQ9mYBPGgupFlb0OMeY5swQExvpN7A&usqp=CAU" alt="Low Brain" className="Fail" />

                </div> :
                <div className="flex-column"><img src="https://img.freepik.com/premium-vector/brain-no-brain-vector-cartoon-character_193274-9006.jpg?w=2000" alt="Low Brain" className="Fail" />
                </div>}
            <h2>{msg}</h2>
            <button className="btn" onClick={() => Home()}>Home</button>
        </div>
    )
}