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
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    }, []);

    return (
        <div id="smooth-wrapper">
            <Cursor text="VIEW PROJECT" />

            <div id="smooth-content">
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
            </div>
        </div>
    );
}
