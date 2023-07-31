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
                        minWidth: '100%',
                        maxWidth: '100%',
                    },
                })
            })
        )
    }, [])

    let handelLeftArrow = () => {
        setOffset((currentOffset: number) => {
                const newOffset = currentOffset + 100
                console.log(newOffset)
                return Math.min(newOffset, 0)
            }
        )
    }
    let handelRightArrow = () => {
        setOffset((currentOffset: number) => {
                const newOffset = currentOffset - 100
                console.log(newOffset)
                return Math.max(newOffset, -200)
            }
        )
    }

    return (
        <div className={s.mainContainer}>
            <button className={s.arrow} onClick={handelLeftArrow}>
                <div className={s.arrowTopLeft}></div>
                <div className={s.arrowBottomLeft}></div>
            </button>
            <div className={s.window}>
                <div className={s.allItemsContainer}
                     style={{
                         transform: `translateX(${offset}%)`
                     }}
                >
                    {pages}
                </div>
            </div>
            <button className={s.arrow} onClick={handelRightArrow}>
                <div className={s.arrowTopRight}></div>
                <div className={s.arrowBottomRight}></div>
            </button>
        </div>
    );
};

export default Carousel;