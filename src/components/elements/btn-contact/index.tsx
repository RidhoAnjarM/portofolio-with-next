import React from 'react'

const BtnContact = () => {
    return (
        <div>
            <div className="w-[230px] h-[50px] rounded-full bg-primary flex items-center justify-center mt-[18px] ms-[20px] lg:w-[349px] lg:h-[65px] lg:rounded-[20px] border-2 border-secondary hover:text-primary hover:bg-secondary hover:shadow-2xl duration-500 ease-in-out lg:ms-0">
                <a href="#contact"
                    className="font-spaceGrotesk text-secondary font-bold fill-secondary text-[20px] flex items-center justify-center hover:fill-white hover:text-primary w-full h-full duration-500 ease-in-out">
                    <span className="me-[10px]"><svg xmlns="http://www.w3.org/2000/svg" height="20px"
                        width="20px" viewBox="0 0 512 512">
                        <path
                            d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32L121 32zm0 64l270 0 48 192-51.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L73 288 121 96z" />
                    </svg></span><span>Contact Me</span></a>
            </div>
        </div>
    )
}

export default BtnContact