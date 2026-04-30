import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home";
import {Search} from "./pages/Search";
import {Movie} from "./pages/Movie";



function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={Home} />
                <Route path="/search" element={Search} />
                <Route path="/movie/:id" element={Movie} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
