"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Nav() {
    useEffect(() => {
        gsap.registerPlugin(ScrambleTextPlugin);

        document.querySelectorAll("li>a.scramble").forEach((item) => {
            gsap.to(item, {
                duration: 1.5,
                scrambleText: {
                    text: "{original}",
                    chars: "upperAndLowerCase",
                    revealDelay: 1,
                },
                ease: "power1.inOut",
            });
        });
    }, []);

    function handleClick() {
        const nav = document.querySelector("nav");
        const burgerMenu = document.querySelector(".burger-menu");
        if (nav) {
            const isExpanded = nav.style.height === "100vh";
            if (!isExpanded) {
                gsap.to(nav, {
                    height: "100vh",
                    width: "100vw",
                    marginTop: "0",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.fromTo(
                    ".mobile-menu-item",
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        delay: 0.3,
                        stagger: 0.1,
                        ease: "power2.out",
                    }
                );
                gsap.to(burgerMenu, {
                    rotate: 45,
                    duration: 0.2,
                    ease: "sine",
                });
            } else {
                gsap.to(nav, {
                    height: "64px",
                    width: "calc(100vw - 48px)",
                    marginTop: "16px",
                    duration: 0.4,
                    ease: "power2.in",
                });

                gsap.to(".mobile-menu-item", {
                    opacity: 0,
                    y: -20,
                    duration: 0.2,
                    stagger: 0.05,
                    ease: "power2.in",
                });
                gsap.to(burgerMenu, {
                    rotate: 0,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        }
    }

    return (
        <nav className="flex justify-between box-border mt-4  bg-white/10 p-2 lg:h-[48px] h-[64px] overflow-hidden inset-shadow-2xs inset-shadow-gray-600 lg:w-[900px] w-[calc(100vw-48px)]  rounded-[8px] backdrop-blur-sm fixed left-1/2 -translate-x-1/2 z-50 items-center">
            <div className="pc-menu lg:flex hidden h-full w-full justify-between">
                <a
                    href="/"
                    className="w-[100px] flex justify-center items-center"
                >
                    <img src="/logo.svg" alt="" className="logo pl-4" />
                </a>
                <ul className="w-[550px] flex text-white text-center">
                    <li className="w-full bg-white/10 content-center rounded-[4px] hover:bg-white/10">
                        <a href="/" className="scramble mix-blend-difference">
                            Home
                        </a>
                    </li>
                    <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                        <a
                            href="#projects"
                            className="scramble mix-blend-difference"
                        >
                            Projects
                        </a>
                    </li>
                    <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                        <a href="#" className="scramble mix-blend-difference">
                            About
                        </a>
                    </li>
                    <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                        <a
                            href="https://www.behance.net/artury"
                            target="_blank"
                            className="scramble mix-blend-difference"
                        >
                            Behance
                        </a>
                    </li>
                    <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                        <a
                            href="/resume.pdf"
                            className="scramble mix-blend-difference"
                            download={true}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                <a
                    className="btn-gradient content-center rounded-[4px] px-6 text-white mix-blend-difference"
                    href="https://www.linkedin.com/in/artur-yurin/"
                    target="_blank"
                >
                    Get in touch
                </a>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu lg:hidden flex flex-col w-full h-full justify-between pb-8">
                <div className="flex w-full justify-between">
                    <img src="/logo.svg" alt="" className="logo w-[80px]" />
                    <button
                        onClick={handleClick}
                        className="burger-menu lg:hidden w-[48px] h-[48px] flex items-center justify-center"
                    >
                        <PlusIcon className="w-[24px] h-[24px]" />
                    </button>
                </div>

                <ul className="flex flex-col w-full items-center content-center text-white/80 text-left gap-12 text-5xl">
                    <li className="mobile-menu-item w-full content-center rounded-[4px] hover:bg-white/10">
                        <a href="/">Home</a>
                    </li>
                    <li className="mobile-menu-item w-full content-center rounded-[4px] hover:bg-white/10">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="mobile-menu-item w-full content-center rounded-[4px] hover:bg-white/10">
                        <a href="#">About</a>
                    </li>
                    <li className="mobile-menu-item w-full content-center rounded-[4px] hover:bg-white/10">
                        <a
                            href="https://www.behance.net/artury"
                            target="_blank"
                        >
                            Behance
                        </a>
                    </li>
                    <li className="mobile-menu-item w-full content-center rounded-[4px] hover:bg-white/10">
                        <a href="/resume-sample.pdf" download={true}>
                            Resume
                        </a>
                    </li>
                </ul>
                <a
                    className="btn-gradient content-center rounded-[4px] px-6 text-white/80 text-center text-2xl h-[48px]"
                    href="https://www.linkedin.com/in/artur-yurin/"
                    target="_blank"
                >
                    Get in touch
                </a>
            </div>
        </nav>
    );
}
