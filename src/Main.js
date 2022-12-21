import Home from "./Home";
import Game from "./game"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./Data/Store"
import Page2 from "./Page2";
import { Provider } from "react-redux";
export default function Main() {
    return (
        <div>
            <BrowserRouter>
            <Provider store={Store}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Page2 />} />
                    <Route path="/game1" element={<Game />} />
                </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    )
}