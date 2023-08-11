import React, {Suspense} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Projects from "./components/Content/Projects/Projects";
import Main from "./components/Content/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import About from "./components/Content/About/About";


function App() {
    return (
        <Suspense fallback={<div>Загрузка</div>}>
            <div className="App">
                <Header/>
                <div className='Content'>
                    <Routes>
                        <Route path={"/aboutMe"} element={<About/>}/>
                        <Route path={"/Contacts"} element={<Contacts/>}/>
                        <Route path={"/Projects"} element={<Projects/>}/>
                        <Route path={"/Main"} element={<Main/>}/>
                        <Route path={"/*"} element={<Navigate to={'/main'}/>}/>
                    </Routes>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
