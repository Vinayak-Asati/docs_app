import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing el",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing el",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            },
        },
        {
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing el",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
    ];

    return (
        <div>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}
            </div>
        </div>
    )
}

export default Foreground