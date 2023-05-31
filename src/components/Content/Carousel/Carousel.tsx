import React, {Children, cloneElement, DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState} from 'react';
import s from './Carousel.module.css'

/*DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>*/

const Carousel: FC<any> = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState<number>(0)


    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '500px',
                        maxWidth: '500px',
                    },
                })
            })
        )
    }, [])

    let handelLeftArrow = () => {
        setOffset((currentOffset: number) => {
                const newOffset = currentOffset + 500
                console.log(newOffset)
                return Math.min(newOffset, 0)
            }
        )
    }
    let handelRightArrow = () => {
        setOffset((currentOffset: number) => {
                const newOffset = currentOffset - 500
                console.log(newOffset)
                return newOffset
            }
        )
    }

    return (
        <div className={s.mainContainer}>
            <button className={s.arrow} onClick={handelLeftArrow}>left</button>
            <div className={s.window}>
                <div className={s.allItemsContainer}
                     style={{
                         transform: `translateX(${offset}px)`
                     }}
                >
                    {pages}
                </div>
            </div>
            <button className={s.arrow} onClick={handelRightArrow}>right</button>
        </div>
    );
};

export default Carousel;