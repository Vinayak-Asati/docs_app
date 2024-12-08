import React from 'react'

const Background = () => {
    return (
        <div>
            <div className='fixed w-full h-screen z-[2]'>
                <div className='w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold absolute top-[5%]'>
                    Documents
                </div>

                <h1 className='absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 text-[12vw] leading-none tracking-tighter font-semibold text-zinc-900'>
                    Docs.
                </h1>
            </div>
        </div>
    )
}

export default Background