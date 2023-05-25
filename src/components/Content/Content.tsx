import React, {FC} from "react";
import AboutMe from "./AboutMe/AboutMe";
import SocialNetwork from "./Progects/SocialNetwork/SocialNetwork";
import YouTubeClone from "./Progects/YouTubeClone/YouTubeClone";
import Portfolio from "./Progects/Portfolio/Portfolio";

const Content: FC = () => {
return <div>
    <AboutMe/>
    <SocialNetwork/>
    <YouTubeClone/>
    <Portfolio/>
</ div>
}

export default Content