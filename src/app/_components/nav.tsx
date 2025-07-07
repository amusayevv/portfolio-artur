"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

export default function Nav() {
    useEffect(() => {
        gsap.registerPlugin(ScrambleTextPlugin);

        document.querySelectorAll("li>a").forEach((item) => {
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

    return (
        <nav className="flex justify-between mt-4 pl-6 pr-2 bg-white/10 p-2 h-[48px] inset-shadow-2xs inset-shadow-gray-600 w-[900px] rounded-[8px] backdrop-blur-sm fixed left-1/2 -translate-x-1/2 z-50">
            <img src="/logo.svg" alt="" className="logo" />
            <ul className="w-[550px] flex text-white/80 text-center">
                <li className="w-full bg-white/10 content-center rounded-[4px] hover:bg-white/10">
                    <a href="/">Home</a>
                </li>
                <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                    <a href="#projects">Projects</a>
                </li>
                <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                    <a href="#">About</a>
                </li>
                <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                    <a href="https://www.behance.net/artury" target="_blank">
                        Behance
                    </a>
                </li>
                <li className="w-full content-center rounded-[4px] hover:bg-white/10">
                    <a href="/resume-sample.pdf" download={true}>
                        Resume
                    </a>
                </li>
            </ul>
            <a
                className="btn-gradient content-center rounded-[4px] px-6 text-white/80"
                href="https://www.linkedin.com/in/artur-yurin/"
                target="_blank"
            >
                Get in touch
            </a>
        </nav>
    );
}
