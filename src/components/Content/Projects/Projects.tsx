import React, {FC} from "react";
import {useInView} from "react-intersection-observer";
import Carousel from "../Carousel/Carousel";
import s from './Projects.module.css'
import Project from "./Project/Project";
const Projects: FC = () => {
    const {ref, inView} = useInView({
        threshold: 0.1
    })
    let projects: Array<{ name: string, site: string }> = [{name: 'Social Network', site: 'SocialNetwork'}, {name: "YouTube Clone", site: 'YouTubeClone'}, {name: "Portfolio", site: "Portfolio"}]
    return <div>
        <Carousel>
            {projects.map(i => <div ref={ref} className={s.item}><Project item={i} /></div> )}
        </Carousel>
    </ div>
}

export default Projects