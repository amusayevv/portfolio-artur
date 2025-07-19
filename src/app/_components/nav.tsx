"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

export default function Nav({ activeSection }: { activeSection?: string }) {
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

        // Hide navbar on scroll
        if (window.innerWidth <= 720) {
            const nav = document.querySelector("nav");
            let prevScrollPosition = window.pageYOffset;
            window.onscroll = () => {
                let currentScrollPosition = window.pageYOffset;
                if (nav)
                    if (prevScrollPosition < currentScrollPosition) {
                        nav.style.top = "-100px";
                    } else {
                        nav.style.top = "0";
                    }
                prevScrollPosition = currentScrollPosition;
            };
        }
    }, []);

    function preventScroll(e: any) {
        e.preventDefault();
    }

    function handleClick() {
        const nav = document.querySelector("nav");
        if (nav) {
            document.addEventListener("touchmove", preventScroll, {
                passive: false,
            });

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
                gsap.to(document.querySelector("#burger-icon-after"), {
                    rotate: 45,
                    duration: 0.2,
                    top: "50%",
                    ease: "sine",
                });
                gsap.to(document.querySelector("#burger-icon-before"), {
                    rotate: -45,
                    duration: 0.2,
                    top: "50%",
                    ease: "sine",
                });
            } else {
                document.removeEventListener("touchmove", preventScroll);

                gsap.to(nav, {
                    height: "48px",
                    width: "calc(100vw - 16px)",
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
                gsap.to(document.querySelector("#burger-icon-after"), {
                    rotate: 0,
                    top: "calc(50% + 5px)",
                    duration: 0.2,
                    ease: "sine",
                });
                gsap.to(document.querySelector("#burger-icon-before"), {
                    rotate: 0,
                    top: "calc(50% - 5px)",
                    duration: 0.2,
                    ease: "sine",
                });
            }
        }
    }

    return (
        <nav className="top-0 flex justify-between box-border mt-4  bg-white/10 lg:p-2 px-2 h-[48px] overflow-hidden inset-shadow-2xs inset-shadow-gray-600 lg:w-[960px] w-[calc(100vw-16px)]  rounded-[8px] backdrop-blur-sm fixed left-1/2 -translate-x-1/2 z-50 items-center duration-300">
            <div className="pc-menu lg:flex hidden h-full w-full justify-between">
                <a
                    href="/"
                    className="w-[100px] flex justify-center items-center"
                >
                    <img src="/logo.svg" alt="" className="logo pl-4" />
                </a>
                <ul className="w-[600px] flex text-white text-center">
                    <li
                        className="w-full content-center rounded-[4px] hover:bg-white/10"
                        style={
                            activeSection === "home"
                                ? {
                                      backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                  }
                                : { backgroundColor: "transparent" }
                        }
                    >
                        <a
                            href="/#home"
                            className="scramble mix-blend-difference"
                        >
                            Home
                        </a>
                    </li>
                    <li
                        className="w-full content-center rounded-[4px] hover:bg-white/10"
                        style={
                            activeSection === "projects"
                                ? {
                                      backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                  }
                                : { backgroundColor: "transparent" }
                        }
                    >
                        <a
                            href="/#projects"
                            className="scramble mix-blend-difference"
                        >
                            Projects
                        </a>
                    </li>
                    <li
                        className="w-full content-center rounded-[4px] hover:bg-white/10"
                        style={
                            activeSection === "services"
                                ? {
                                      backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                  }
                                : { backgroundColor: "transparent" }
                        }
                    >
                        <a
                            href="/#services"
                            className="scramble mix-blend-difference"
                        >
                            Services
                        </a>
                    </li>
                    <li
                        className="w-full content-center rounded-[4px] hover:bg-white/10"
                        style={
                            activeSection === "about"
                                ? {
                                      backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                  }
                                : { backgroundColor: "transparent" }
                        }
                    >
                        <a
                            href="/#about"
                            className="scramble mix-blend-difference"
                        >
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
                    <img
                        src="/logo.svg"
                        alt=""
                        className="logo lg:w-[80px] w-[64px]"
                    />
                    <button
                        onClick={handleClick}
                        className="burger-menu lg:hidden w-[48px] h-[48px] flex items-center justify-center"
                    >
                        <div id="burger-icon" className="w-[24px] h-[24px]">
                            <div id="burger-icon-after"></div>
                            <div id="burger-icon-before"></div>
                        </div>
                    </button>
                </div>

                <ul
                    id="burger-list"
                    className="flex flex-col w-full items-center content-center text-white/80 text-left gap-12 text-4xl"
                >
                    <li
                        className="mobile-menu-item w-full content-center opacity-0"
                        onClick={handleClick}
                    >
                        <a href="/#home">Home</a>
                    </li>
                    <li
                        className="mobile-menu-item w-full content-center opacity-0"
                        onClick={handleClick}
                    >
                        <a href="/#projects">Projects</a>
                    </li>
                    <li
                        className="mobile-menu-item w-full content-center opacity-0"
                        onClick={handleClick}
                    >
                        <a href="/#services">Services</a>
                    </li>
                    <li
                        className="mobile-menu-item w-full content-center opacity-0"
                        onClick={handleClick}
                    >
                        <a href="/#about">About</a>
                    </li>
                    <li
                        className="mobile-menu-item w-full content-center opacity-0"
                        onClick={handleClick}
                    >
                        <a
                            href="https://www.behance.net/artury"
                            target="_blank"
                        >
                            Behance
                        </a>
                    </li>
                    <li
                        className="mobile-menu-item w-full content-center opacity-0"
                        onClick={handleClick}
                    >
                        <a href="/resume-sample.pdf" download={true}>
                            Resume
                        </a>
                    </li>
                </ul>
                <a
                    id="burger-get-in-touch"
                    className="block btn-gradient content-center rounded-[4px] px-6 text-white/80 text-center text-2xl h-[48px]"
                    href="https://www.linkedin.com/in/artur-yurin/"
                    target="_blank"
                >
                    Get in touch
                </a>
            </div>
        </nav>
    );
}
