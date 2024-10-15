import BtnSosial from "@/components/elements/btn-sosial"

const About = () => {
    return (
        <section className="w-full mt-[400px] bg-primary lg:mt-[121px] lg:mb-8 lg:h-auto" id="about">
            <div className="container">
                <div className="w-full flex flex-wrap justify-center lg:justify-between">
                    <div className="lg:flex lg:flex-wrap lg:w-[500px] lg:mt-[100px]">
                        <div className="w-0 h-0 lg:w-[300px] lg:h-[340px] lg:rounded-[30px] lg:overflow-hidden lg:bg-secondary lg:mx-auto lg:mt-[121px]">
                            <img src="../images/me.png" className="hidden w-0 h-0 lg:block lg:w-auto lg:h-auto mt-11" alt="" />
                        </div>
                        <BtnSosial />
                    </div>
                    <div className="flex flex-wrap justify-center lg:flex-col lg:items-end lg:justify-end bottom-0">
                        <div className="w-full  mt-[75px] mb-[35px] flex lg:mt-[121px] ">
                            <h1 className="text-[36px] font-bold font-space-grotesk lg:text-[64px] text-secondary mx-auto lg:m-0 lg:ms-[100px]">
                                About Me
                            </h1>
                        </div>
                        <div className="w-[300px] h-[350px] rounded-[20px] mb-[100px] bg-secondary lg:w-[866px] lg:h-[500px] lg:rounded-none lg:rounded-ss-[70px] px-[20px] py-[40px] lg:mb-0">
                            <p className="font-space-grotesk text-bold text-[15px] text-white text-center lg:w-[630px] lg:text-[24px] lg:text-start lg:mt-[68px] lg:ms-[95px]">
                                Hello! I`m Ridho Anjar Maulana, a high school student majoring in Software Engineering. I
                                have a
                                passion for technology and coding, with experience in Nuxt.js and pnpm. I enjoy tackling
                                challenges and continuously learning to create innovative software solutions. Explore my
                                portfolio and feel free to contact me if you like to collaborate!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About