import React from 'react'

const BtnProject = () => {
    return (
        <div>
            <div className="w-[230px] h-[50px] rounded-full bg-secondary flex items-center justify-center mt-[18px] ms-[20px] lg:w-[349px] lg:h-[65px] lg:rounded-[20px] lg:border-secondary hover:text-secondary hover:bg-primary hover:shadow-2xl duration-500 ease-in-out lg:ms-0 border-2 border-primary">
                <a href="#project"
                    className="font-spaceGrotesk text-primary font-bold fill-primary text-[20px] flex items-center justify-center hover:fill-secondary hover:text-secondary w-full h-full duration-500 ease-in-out">
                    <span className="me-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5"
                            viewBox="0 0 576 512">
                            <path
                                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                    </span><span>View Project</span>
                </a>
            </div>
        </div>
    )
}

export default BtnProject