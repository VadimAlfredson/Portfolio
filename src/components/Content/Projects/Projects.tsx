import React, {FC} from "react";
import {useInView} from "react-intersection-observer";
import Carousel from "../Carousel/Carousel";
import s from './Projects.module.css'
const Projects: FC = () => {
    const {ref, inView} = useInView({
        threshold: 0.1
    })
    let projects: Array<string> = ['SocialNetwork', "YouTube", "Portfolio"]
    return <div>
        <Carousel>
            {projects.map(i =>
                <div ref={ref} className={s.item}>{i}</div>
            )}
        </Carousel>
    </ div>
}

export default Projects