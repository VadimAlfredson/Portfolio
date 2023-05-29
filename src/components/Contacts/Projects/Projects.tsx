import React, {FC} from "react";
import {useInView} from "react-intersection-observer";

const Projects: FC = () => {
    const {ref, inView} = useInView({
        threshold: 0.1
    })
    let projects: Array<string> = ['SocialNetwork', "YouTube", "Portfolio"]
    return <div>
        <div>
            {projects.map(i =>
                <div ref={ref}>{i}</div>
            )}
        </div>
    </ div>
}

export default Projects