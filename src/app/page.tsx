"use client";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Cursor from "./_components/cursor";

const hours = String(new Date().getHours()).padStart(2, "0");
const minutes = String(new Date().getMinutes()).padStart(2, "0");
const currentTime: string = hours + ":" + minutes;

export default function Page() {
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    //     ScrollSmoother.create({
    //         smooth: 1,
    //         effects: true,
    //     });
    // }, []);

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
        <div>
            <Cursor text="VIEW PROJECT" />

            <div>
                <section
                    className="h-dvh flex w-full px-6 items-center justify-around"
                    style={{
                        background:
                            "radial-gradient(100% 100% at 50% 0%, #000 0%, #000 46.63%, #090828 61.06%, #4622A8 83.29%, #C5B0F8 100%)",
                    }}
                >
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex inset-shadow-2xs inset-shadow-gray-600 rounded-full bg-white/10 text-white items-center gap-3 px-4 py-2">
                            <div className="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
                            <p>Dubai - United Arab Emirates | {currentTime}</p>
                        </div>
                        <h1 className="text-6xl font-semibold max-w-[1000px] bg-[linear-gradient(180deg,#FFF_30%,#999_100%)] bg-clip-text text-transparent">
                            Hi, I'm Artur. UX/UI Designer Crafting Intuitive &
                            Beautiful Experiences.
                        </h1>
                    </div>
                    <img
                        src="iPhone-16-Pro.png"
                        alt="iPhone"
                        className="w-[320px] h-auto object-contain mt-auto"
                    />
                </section>

                <section className="mt-[100px] px-6 flex flex-col gap-10">
                    <h2 className="text-[32px]">Projects</h2>
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <a
                                href="#"
                                className="project rounded-2xl h-[480px] bg-[url('/project1.webp')] bg-cover bg-center bg-zoom-transition"
                            ></a>
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="insider.svg"
                                            alt="star logo"
                                        />
                                        <h4 className="font-medium text-[24px]">
                                            Insider
                                        </h4>
                                    </div>
                                    <p className="text-white/60 leading-[150%]">
                                        Insider is a smart dashboard that boosts
                                        your digital experience with quick
                                        access, skill-building tools, and an
                                        automated Trading Bot.
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">Links</p>
                                        <p>Notion</p>
                                        <p>Figma</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">
                                            Industry
                                        </p>
                                        <p>Crypto</p>
                                        <p>Web 3</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-white/60">
                                            Delieverables
                                        </p>
                                        <p>UX/UI design</p>
                                        <p>Logo design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <a
                                href="#"
                                className="project rounded-2xl h-[480px] bg-[url('/project2.webp')] bg-cover bg-center bg-zoom-transition"
                            ></a>
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="confero.svg"
                                            alt="star logo"
                                        />
                                        <h4 className="font-medium text-[24px]">
                                            Confero Desktop
                                        </h4>
                                    </div>
                                    <p className="text-white/60 leading-[150%]">
                                        Confero for Desktop delivers the full
                                        power of enterprise communication. With
                                        a spacious interface designed for
                                        multitasking, it supports high-quality
                                        video conferencing, deep collaboration,
                                        and integrated productivity tools for
                                        remote teams.{" "}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">Links</p>
                                        <a href="#">Notion</a>
                                        <a href="#">Figma</a>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">
                                            Industry
                                        </p>
                                        <p>Corporate</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-white/60">
                                            Delieverables
                                        </p>
                                        <p>UI/UX design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <a
                                href="#"
                                className="project rounded-2xl h-[480px] bg-[url('/project3.webp')] bg-cover bg-center bg-zoom-transition"
                            ></a>
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="confero.svg"
                                            alt="star logo"
                                        />
                                        <h4 className="font-medium text-[24px]">
                                            Confero Mobile
                                        </h4>
                                    </div>
                                    <p className="text-white/60 leading-[150%]">
                                        Confero Mobile empowers teams on the go
                                        with seamless video calls, real-time
                                        messaging, and intuitive collaboration
                                        tools—ideal for staying connected during
                                        commutes, fieldwork, or while traveling.
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">Links</p>
                                        <a href="#">Notion</a>
                                        <a href="#">Figma</a>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">
                                            Industry
                                        </p>
                                        <p>Corporate</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-white/60">
                                            Delieverables
                                        </p>
                                        <p>UI/UX design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <a
                                href="#"
                                className="project rounded-2xl h-[480px] bg-[url('/project4.webp')] bg-cover bg-center bg-zoom-transition"
                            ></a>
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="confero.svg"
                                            alt="star logo"
                                        />
                                        <h4 className="font-medium text-[24px]">
                                            Confero TV
                                        </h4>
                                    </div>
                                    <p className="text-white/60 leading-[150%]">
                                        Confero TV transforms your living room
                                        or meeting space into a smart
                                        collaboration hub. Perfect for group
                                        calls and presentations, it brings video
                                        conferencing to the big screen,
                                        enhancing visibility and engagement for
                                        team-wide discussions.{" "}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">Links</p>
                                        <a href="#">Notion</a>
                                        <a href="#">Figma</a>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">
                                            Industry
                                        </p>
                                        <p>Corporate</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-white/60">
                                            Delieverables
                                        </p>
                                        <p>UI/UX design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <a
                                href="#"
                                className="project rounded-2xl h-[480px] bg-[url('/project5.webp')] bg-cover bg-center bg-zoom-transition"
                            ></a>
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <img src="sbc.svg" alt="star logo" />
                                        <h4 className="font-medium text-[24px]">
                                            SBC admin
                                        </h4>
                                    </div>
                                    <p className="text-white/60 leading-[150%]">
                                        SBC Admin is a dashboard for managing
                                        corporate communication. It provides
                                        tools for overseeing servers, routing
                                        groups, and logs, optimizing remote
                                        teamwork and collaboration.
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">Links</p>
                                        <a href="#">Notion</a>
                                        <a href="#">Figma</a>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white/60">
                                            Industry
                                        </p>
                                        <p>Corporate</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-white/60">
                                            Delieverables
                                        </p>
                                        <p>UX/UI design</p>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </div>
    );
}
