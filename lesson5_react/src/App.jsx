import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pages from "./Pages.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {Pages.map((page, index) => {
                    const { element, ...rest } = page;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
