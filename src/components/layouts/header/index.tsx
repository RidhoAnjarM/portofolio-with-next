import { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    useEffect(() => {
        const header = document.querySelector('header');

        if (header) {
            const fixedNav = header.offsetTop;

            const handleScroll = () => {
                if (window.pageYOffset > fixedNav) {
                    header.classList.add('navbar-fixed');
                } else {
                    header.classList.remove('navbar-fixed');
                }
            };

            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');

            const handleHamburgerClick = () => {
                if (hamburger && navMenu) {
                    hamburger.classList.toggle('hamburger-active');
                    navMenu.classList.toggle('hidden');
                }
            };

            window.addEventListener('scroll', handleScroll);
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', handleHamburgerClick);
            }

            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (hamburger && navMenu) {
                    hamburger.removeEventListener('click', handleHamburgerClick);
                }
            };
        }
    }, []);

    return (
        <header className="bg-primary absolute top-0 left-0 w-full flex items-center h-[90px] lg:bg-transparent lg:h-[125px] lg:right-[100px]">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4 lg:ps-[100px] lg:pe-[100px]">
                        <Link href="#home" className="group">
                            <img src="../images/logo.png" alt="logo" className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]" />
                        </Link>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu"
                            className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <Link href="#landing" className="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk">
                                        HOME
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#about"
                                        className="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk">
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#project"
                                        className="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk">
                                        PROJECT
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link href="#contact"
                                        className="text-base text-black py-2 mx-8 flex lg:bg-primary lg:h-[40px] lg:w-[115px] lg:rounded-[50px] lg:items-center lg:justify-center lg:ms-[50px] lg:mx-0 group-hover:lg:text-white group-hover:lg:bg-secondary duration-500 ease-in-out lg:border-black lg:border-[1px] lg:font-bold font-space-grotesk lg:me-[100px]">
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
