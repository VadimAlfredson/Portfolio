import React from 'react';
import s from './About.module.css'
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <div className={s.about}>
<div className={s.text}>Text</div>
            <div className={s.photo}>Photo</div>
        </div>
    );
};

export default About;