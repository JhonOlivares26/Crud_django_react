import React from "react";
import {BrowserRouter, Routes, Route, Navigate}  from "react-router-dom";
import {TareasPage} from './Pages/TareasPage.jsx'
import {TareasFormPage} from './Pages/TareasFormPage.jsx'
import {Navigation} from './Components/Navigation.jsx'
function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Navigate to="/tasks"/>} />
                <Route path="/tareas" element={<TareasPage/>} />
                <Route path="/tareas-create" element={<TareasFormPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App