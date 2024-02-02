import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import ViewProduct from "./ViewProduct";


const App = () => {
    return(
        <BrowserRouter>
      
            <Routes>
                <Route path="/search/:id" element={<ViewProduct />} />
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />)