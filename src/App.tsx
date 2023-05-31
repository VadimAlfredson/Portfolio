import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Projects from "./components/Content/Projects/Projects";
import AboutMe from "./components/Content/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
        <div className='Content'>
        <Routes>
            <Route path={"/Contacts"} element={<Contacts />}/>
            <Route path={"/Projects"} element={<Projects />}/>
            <Route path={"/AboutMe"} element={<AboutMe />}/>
            <Route path={"/*"} element={<Navigate to={'/AboutMe'}/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
