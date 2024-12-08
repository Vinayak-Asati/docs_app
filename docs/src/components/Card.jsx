import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"


const Card = ({ data, reference }) => {
    return (
        <motion.div
            drag
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
            whileDrag={{ scale: 1.1 }}
            dragConstraints={reference}
            className='relative flex-shrink-0 w-60 h-72 text-white px-8 py-10 rounded-[45px] bg-zinc-900/90 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight m-5 font-semibold'>
                {data.desc}
            </p>
            <div className='absolute footer bottom-0 w-full left-0'>
                <div className='flex items-center justify-between  px-8 py-4 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 flex items-center rounded-full justify-center'>
                        {data.close ? <IoClose size=".8em" color='#fff' /> :
                            <LuDownload size=".8em" color='#fff' />
                        }
                    </span>
                </div>
                {
                    /* 
                    
                    As TailwindCSS can't evaluate your dynamic className, that is the reason why the background color was not generating for other color (green was cached or possibly some other element was directly using "bg-green-600")

Tailwind CSS works by scanning all of your HTML files (Or files metioned in tailwind.config.ts), JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

To make it work you have to pass a valid class name like "bg-red-600".

However, if you still want make dynamic classname `tag bg-${color}-600` work with tailwindcss you have to mention the required classnames in a safelist inside the tailwind.config.ts

safelist: [
    'bg-green-600',
    'bg-red-600',
    'bg-purple-600',
  ]
                    
                     */
                    data.tag.isOpen && (
                        <div className={`tag w-ful py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }

            </div>
        </motion.div>
    )
}

export default Card