import BtnContact from "@/components/elements/btn-contact"
import BtnProject from "@/components/elements/btn-project"
import BtnSosial from "@/components/elements/btn-sosial"

const Landing = () => {
    return (
        <section className="mb-[52px] lg:mb-[121px] w-full h-[768px]" id="landing">
            <div className="container">
                <div className="flex flex-wrap lg:flex w-full lg:justify-between lg:flex-nowrap">
                    <div className="w-full flex mt-[152px] lg:mt-[221px] lg:justify-between">
                        <div className="w-[333px] h-[400px] bg-secondary rounded-e-[45px] lg:w-[950px] lg:h-[470px] lg:flex lg:justify-between lg:rounded-e-[70px]">
                            <div>
                                <h1 className="text-[16px] text-white font-spaceGrotesk font-normal ms-[58px] mt-[22px] lg:text-[32px] lg:m-[80px_0px_26px_108px]">
                                    Hello
                                    everyone, i am
                                </h1>
                                <div className="w-[250px] h-[33px] bg-primary rounded-full flex items-center justify-center mx-auto my-[10px] lg:w-[447px] lg:h-[47px] lg:ms-[82px]">
                                    <h1 className="text-[16px] text-dark font-spaceGrotesk font-normal lg:text-[32px]">Ridho
                                        Anjar Maulana
                                    </h1>
                                </div>
                                <h1
                                    className="text-[16px] text-white font-spaceGrotesk font-normal ms-[58px] lg:text-[32px] lg:ms-[108px] mt-[26px]">
                                    Web Develover
                                </h1>
                                <p
                                    className="w-[269px] text-[14px] text-white font-spaceGrotesk font-light mt-[26px] mx-auto lg:w-[487px] lg:ms-[95px] lg:text-[15px]">
                                    As
                                    a web developer, I believe that every line of code is an opportunity to create something
                                    extraordinary. With a dedication to detail and a passion for innovation, I strive to
                                    bring
                                    ideas to life through responsive design and optimal functionality.
                                </p>
                            </div>
                            <div className="flex justify-evenly w-full mt-[20px] lg:block lg:w-[100px] lg:my-auto lg:me-[80px]">
                                <a href="#"
                                    className="w-[30px] h-[30px] border-[1px]  border-white rounded-full p-[4px] flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:p-[11px] lg:pt-[14px] fill-white hover:bg-white hover:fill-[#E65100] duration-500 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    className="w-[30px] h-[30px] border-[1px]  border-white rounded-full p-[4px] flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:p-[11px] lg:my-[10px] lg:pt-[14px] fill-white hover:bg-white hover:fill-[#2975af] duration-500 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    className="w-[30px] h-[30px] border-[1px]  border-white rounded-full p-[4px] flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:p-[10px] lg:my-[10px] fill-white hover:bg-white hover:fill-[#cfc22b] duration-500 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    className="w-[30px] h-[30px] border-[1px]  border-white rounded-full p-[4px] flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:p-[6px] lg:my-[10px] fill-white hover:bg-white hover:fill-[#8800ff] duration-500 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path
                                            d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    className="w-[30px] h-[30px] border-[1px]  border-white rounded-full p-[4px] flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:p-[8px] lg:my-[10px] fill-white hover:bg-white hover:fill-[#ff0000] duration-500 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M504.4 115.8a5.7 5.7 0 0 0 -.3-.7 8.5 8.5 0 0 0 -.5-1.3 6 6 0 0 0 -.5-.7 9.4 9.4 0 0 0 -.7-.9c-.2-.2-.5-.4-.8-.6a8.8 8.8 0 0 0 -.9-.7L404.4 55.6a8 8 0 0 0 -8 0L300.1 111h0a8.1 8.1 0 0 0 -.9 .7 7.7 7.7 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .2-.4 .5-.5 .7a9.7 9.7 0 0 0 -.5 1.3c-.1 .2-.2 .4-.3 .7a8.1 8.1 0 0 0 -.3 2.1V223.2l-80.2 46.2V63.4a7.8 7.8 0 0 0 -.3-2.1c-.1-.2-.2-.5-.3-.7a8.4 8.4 0 0 0 -.5-1.2c-.1-.3-.4-.5-.5-.7a9.4 9.4 0 0 0 -.7-.9 9.5 9.5 0 0 0 -.8-.6 9.8 9.8 0 0 0 -.9-.7h0L115.6 1.1a8 8 0 0 0 -8 0L11.3 56.5h0a6.5 6.5 0 0 0 -.9 .7 7.8 7.8 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .3-.4 .5-.6 .7a7.9 7.9 0 0 0 -.5 1.2 6.5 6.5 0 0 0 -.3 .7 8.2 8.2 0 0 0 -.3 2.1v329.7a8 8 0 0 0 4 7l192.5 110.8a8.8 8.8 0 0 0 1.3 .5c.2 .1 .4 .2 .6 .3a7.9 7.9 0 0 0 4.1 0c.2-.1 .4-.2 .6-.2a8.6 8.6 0 0 0 1.4-.6L404.4 400.1a8 8 0 0 0 4-7V287.9l92.2-53.1a8 8 0 0 0 4-7V117.9A8.6 8.6 0 0 0 504.4 115.8zM111.6 17.3h0l80.2 46.2-80.2 46.2L31.4 63.4zm88.3 60V278.6l-46.5 26.8-33.7 19.4V123.5l46.5-26.8zm0 412.8L23.4 388.5V77.3L57.1 96.7l46.5 26.8V338.7a6.9 6.9 0 0 0 .1 .9 8 8 0 0 0 .2 1.2h0a5.9 5.9 0 0 0 .4 .9 6.4 6.4 0 0 0 .4 1v0a8.5 8.5 0 0 0 .6 .8 7.6 7.6 0 0 0 .7 .8l0 0c.2 .2 .5 .4 .8 .6a8.9 8.9 0 0 0 .9 .7l0 0 0 0 92.2 52.2zm8-106.2-80.1-45.3 84.1-48.4 92.3-53.1 80.1 46.1-58.8 33.6zm184.5 4.6L215.9 490.1V397.8L346.6 323.2l45.8-26.2zm0-119.1L358.7 250l-46.5-26.8V131.8l33.7 19.4L392.4 178zm8-105.3-80.2-46.2 80.2-46.2 80.2 46.2zm8 105.3V178L455 151.2l33.7-19.4v91.4h0z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    className="w-[30px] h-[30px] border-[1px]  border-white rounded-full p-[4px] flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:p-[9px] lg:pt-[13px] fill-white hover:bg-white hover:fill-[#42b883] duration-500 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-[295px] h-[333px] rounded-[30px] bg-primary overflow-hidden flex items-end m-auto mt-[50px] lg:mt-[144px] lg:w-[349px] lg:h-[395px] lg:justify-end lg:flex lg:ms-[108px]">
                            <img src="/images/me.png" alt="pp" />
                        </div>
                        <div className="h-[150px] flex-wrap justify-center flex mt-[35px]  w-full lg:ms-0 lg:bg-transparent lg:mt-[20px]">
                            <BtnContact />
                            <BtnProject />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing