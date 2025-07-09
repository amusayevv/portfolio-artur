"use client";
import { useEffect } from "react";

import { gsap } from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Cursor from "./_components/cursor";
import PortfolioCard from "./_components/portfolioCard";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import AboutCard from "./_components/aboutCard";
import Footer from "./_components/footer";

export default function Page() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            normalizeScroll: true,
        });

        ScrollTrigger.create({
            trigger: "#projects",
        });

        const elements = document.querySelectorAll(".scrambleText");
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            duration: 1.5,
                            scrambleText: {
                                text: "{original}",
                                chars: "upperAndLowerCase",
                                revealDelay: 1,
                            },
                            ease: "power1.inOut",
                        });
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    function handleUxUiMouseEnter() {
        document.querySelector("#uxui")?.classList.add("active");
    }
    function handleUxUiMouseLeave() {
        document.querySelector("#uxui")?.classList.remove("active");
    }
    function handleWebMouseEnter() {
        document.querySelector("#web1")?.classList.add("active");
        document.querySelector("#web2")?.classList.add("active");
    }
    function handleWebMouseLeave() {
        document.querySelector("#web1")?.classList.remove("active");
        document.querySelector("#web2")?.classList.remove("active");
    }
    function handleSystemMouseEnter() {
        document.querySelector("#system1")?.classList.add("active");
        document.querySelector("#system2")?.classList.add("active");
        document.querySelector("#system3")?.classList.add("active");
    }
    function handleSystemMouseLeave() {
        document.querySelector("#system1")?.classList.remove("active");
        document.querySelector("#system2")?.classList.remove("active");
        document.querySelector("#system3")?.classList.remove("active");
    }

    useEffect(() => {
        document
            .querySelector("#uxui-block")
            ?.addEventListener("mouseenter", handleUxUiMouseEnter);
        document
            .querySelector("#uxui-block")
            ?.addEventListener("mouseleave", handleUxUiMouseLeave);
        document
            .querySelector("#web-block")
            ?.addEventListener("mouseenter", handleWebMouseEnter);
        document
            .querySelector("#web-block")
            ?.addEventListener("mouseleave", handleWebMouseLeave);
        document
            .querySelector("#system")
            ?.addEventListener("mouseenter", handleSystemMouseEnter);
        document
            .querySelector("#system")
            ?.addEventListener("mouseleave", handleSystemMouseLeave);
    }, []);

    return (
        <div id="smooth-wrapper">
            <Cursor text="VIEW PROJECT" />

            <div id="smooth-content">
                <section
                    id="home"
                    className="h-dvh flex w-full px-40 items-center justify-start"
                    style={{
                        background:
                            "radial-gradient(100% 100% at 50% 0%, #000 0%, #000 46.63%, #090828 61.06%, #4622A8 83.29%, #C5B0F8 100%)",
                    }}
                >
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex inset-shadow-2xs inset-shadow-gray-600 rounded-full bg-white/10 text-white items-center gap-3 px-4 py-2">
                            <div className="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
                            <p>Available to work</p>
                        </div>
                        <h1 className="text-[4rem] leading-[120%] font-semibold max-w-[1000px] text-white">
                            <div className="overflow-hidden py-1">
                                <p className="text-animate">Making Complex</p>
                            </div>
                            <div className="overflow-hidden py-1">
                                <p className="text-animate">
                                    Simple & Consistent
                                </p>
                            </div>
                        </h1>
                        <div className="flex gap-10 flex-col">
                            <div className="overflow-hidden">
                                <p className="text-animate whitespace-nowrap flex gap-5 text-2xl content-center items-center">
                                    UX • UI • Product • Design Systems
                                    <span className="flex gap-1 items-center">
                                        <LightningBoltIcon className="w-6 h-6" />
                                        AI Toolkit
                                    </span>
                                </p>
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/artur-yurin/"
                                    className="button-link px-8 py-3 rounded-[0.5rem] font-semibold"
                                    target="_blank"
                                >
                                    Get in touch
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/artur-yurin/"
                                    className="px-8 py-3 rounded-[0.5rem] font-semibold hover:text-white/60"
                                    target="_blank"
                                >
                                    Explore projects
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="projects"
                    className="mt-[100px] px-6 flex flex-col gap-10"
                >
                    <h2 className="text-[32px]">Projects</h2>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col gap-10" data-speed="1.4">
                            <PortfolioCard
                                imgpath="/project1.webp"
                                logopath="/insider.svg"
                                url="/insider"
                                title="Insider"
                                description="Insider is a smart dashboard that boosts your digital experience with quick access, skill-building tools, and an automated Trading Bot."
                            />
                            <PortfolioCard
                                imgpath="/project2.webp"
                                logopath="/confero.svg"
                                url="confero-desktop"
                                title="Confero"
                                description="Insider is a smart dashboard that boosts your digital experience with quick access, skill-building tools, and an automated Trading Bot."
                            />
                            <PortfolioCard
                                imgpath="/project3.webp"
                                logopath="/confero.svg"
                                url="#"
                                title="Confero"
                                description="Insider is a smart dashboard that boosts your digital experience with quick access, skill-building tools, and an automated Trading Bot."
                            />
                        </div>
                        <div className="flex flex-col gap-10" data-speed="1.2">
                            <PortfolioCard
                                imgpath="/project4.webp"
                                logopath="/confero.svg"
                                url="#"
                                title="Confero"
                                description="Insider is a smart dashboard that boosts your digital experience with quick access, skill-building tools, and an automated Trading Bot."
                            />
                            <PortfolioCard
                                imgpath="/project5.webp"
                                logopath="/confero.svg"
                                url="#"
                                title="Confero"
                                description="Insider is a smart dashboard that boosts your digital experience with quick access, skill-building tools, and an automated Trading Bot."
                            />
                        </div>
                    </div>
                </section>
                <section className="px-6 mt-[100px] flex flex-col gap-10">
                    <h2 className="text-[32px]">Services</h2>

                    <div className="grid grid-cols-2 flex-col gap-6">
                        <div
                            id="uxui-block"
                            className="w-full h-[316px] col-span-2 overflow-hidden border border-white/25 flex justify-between bg-[linear-gradient(272deg,_rgba(255,255,255,0.04)_0.51%,_rgba(255,255,255,0.04)_55.34%,_rgba(255,255,255,0.10)_74.69%,_rgba(255,255,255,0.04)_94.73%)] p-10 rounded-3xl relative"
                        >
                            <div className="flex flex-col gap-2 max-w-[500px]">
                                <h3 className="text-[40px] font-medium">
                                    UX/UI design
                                </h3>
                                <p className="text-white/60 leading-[150%]">
                                    From wireframes to interactive prototypes, I
                                    design clean, user-first interfaces that
                                    make digital journeys feel effortless.
                                </p>
                            </div>
                            <div
                                id="uxui"
                                className="w-[750px] h-[533px] rounded-3xl overflow-hidden border-white/4 border-4 flex-shrink-0 flex items-center justify-center"
                            >
                                <img
                                    src="/services.png"
                                    alt="Services"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div
                            id="web-block"
                            className="w-full h-[500px] overflow-hidden border border-white/25 flex flex-col justify-between bg-[linear-gradient(272deg,_rgba(255,255,255,0.04)_0.51%,_rgba(255,255,255,0.04)_55.34%,_rgba(255,255,255,0.10)_74.69%,_rgba(255,255,255,0.04)_94.73%)] p-10 rounded-3xl relative"
                        >
                            <div className="flex flex-col gap-2 w-full">
                                <h3 className="text-[40px] font-medium">
                                    Web Design
                                </h3>
                                <p className="text-white/60 leading-[150%]">
                                    I design responsive, visually engaging
                                    websites that blend form and
                                    function—bringing ideas to life through
                                    layout, hierarchy, and thoughtful
                                    interactivity.
                                </p>
                            </div>
                            <div>
                                <img
                                    id="web1"
                                    className="w-[320px] h-[268px] bottom-[-40px] absolute pointer-events-none"
                                    src="call.png"
                                    alt=""
                                />
                                <div
                                    id="web2"
                                    className="w-[550px] rounded-3xl pointer-events-none overflow-hidden border-white/4 border-4 flex-shrink-0 flex items-center justify-center absolute bottom-[-60px] right-[-120px] rotate-2"
                                >
                                    <img
                                        src="/insider.png"
                                        alt="Services"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            id="system"
                            className="w-full h-[500px] overflow-hidden border border-white/25 flex flex-col justify-between bg-[linear-gradient(272deg,_rgba(255,255,255,0.04)_0.51%,_rgba(255,255,255,0.04)_55.34%,_rgba(255,255,255,0.10)_74.69%,_rgba(255,255,255,0.04)_94.73%)] p-10 rounded-3xl relative"
                        >
                            <div className="flex flex-col gap-2 w-full">
                                <h3 className="text-[40px] font-medium">
                                    Design System Implementation{" "}
                                </h3>
                                <p className="text-white/60 leading-[150%]">
                                    I build scalable design systems that ensure
                                    visual consistency and speed up
                                    collaboration—from reusable components to
                                    clear guidelines that empower seamless
                                    development.{" "}
                                </p>
                            </div>
                            <div>
                                <img
                                    id="system3"
                                    className="absolute w-[320px] bottom-[140px] left-[340px]"
                                    src="image 41.png"
                                    alt=""
                                />
                                <img
                                    id="system2"
                                    className="absolute w-[420px] bottom-[60px] left-[180px]"
                                    src="image 42.png"
                                    alt=""
                                />
                                <img
                                    id="system1"
                                    className="absolute w-[500px] bottom-[-140px] left-[80px]"
                                    src="image 43.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="services"
                    className="px-6 mt-[100px] flex flex-col gap-10 items-center"
                >
                    <div className="flex flex-col gap-10 overflow-hidden relative p-0.5">
                        <h2 className="text-[32px]">About me</h2>
                        <div className="grid grid-cols-3 text-white/60 gap-[1px]">
                            <AboutCard
                                title="6+"
                                subtitle="Years of Experience"
                                description="                                    
                                    I'm a Senior UX/UI Designer who simplifies
                                    complex systems. With over 6 years of
                                    experience across various platforms, I focus
                                    on clarity and real business impact."
                            />
                            <div className="hover:text-white p-10 w-[400px] h-[400px] flex flex-col justify-between outline-1 outline-gray-600"></div>
                            <AboutCard
                                title="500,000+"
                                subtitle="Users"
                                description="                                                                        
                                    Scaled enterprise video-conferencing suite
                                    Redesigned key flows and improved UX for
                                    650+ clients. Boosted NPS by 15 points and
                                    eased support burden."
                            />

                            <div className="hover:text-white p-10 w-[400px] h-[400px] flex flex-col justify-between outline-1 outline-gray-600"></div>
                            <AboutCard
                                title="30%+"
                                subtitle="Engagement"
                                description="                                                                        
                                    Launched mobile & Smart TV apps Expanded
                                    product reach in hybrid and in-room
                                    environments, increasing daily engagement by
                                    30%."
                            />
                            <div className="hover:text-white p-10 w-[400px] h-[400px] flex flex-col justify-between outline-1 outline-gray-600"></div>
                            <AboutCard
                                title="$2M+"
                                subtitle="Revenue"
                                description="                                                                        
                                    Built a single design system Simplified
                                    crypto purchase flow Optimized onboarding
                                    and flow — brought in 4,500+ new users and
                                    generated over $2M in the first year."
                            />
                            <div className="hover:text-white p-10 w-[400px] h-[400px] flex flex-col justify-between outline-1 outline-gray-600"></div>
                            <AboutCard
                                title="15+"
                                subtitle="Apps Unified"
                                description="                                                                        
                                    Built a single design system Created a
                                    cross-platform design system for web,
                                    desktop, mobile & Smart TV — cut release
                                    time in half and improved handoff by 30%."
                            />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}
