import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home";
import {Search} from "./pages/Search";
import {Movie} from "./pages/Movie";

function App() {

    if (!process.env.REACT_APP_TMDB_KEY || !process.env.REACT_APP_TMDB_READ_TOKEN ) {
        console.error("Missing API key!");
        throw new Error("Missing API key!");
    }

    return (
        <BrowserRouter basename={'/react-spa-dom'}>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/movie/:id" element={<Movie/>} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
