import React from 'react';
import Room from "./pages/Room";
import Main from "./pages/Main";
import NotFound404 from "./pages/NotFound404";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/room/:id" element={<Room/>}/>
            <Route element={<NotFound404/>}/>
        </Routes>
    );
}

export default App;
