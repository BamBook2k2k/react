import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/pages" element={<About />} />

        </Routes>
        </BrowserRouter>
    )
}

export default App;
