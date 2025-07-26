"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Nav from "../_components/nav";

export default function page() {
    return (
        <div className="flex flex-col gap-20">
            <Nav />

            <img
                className="w-full h-dvh object-cover"
                src="project2.webp"
                alt="Laptop"
            />
            <section className="flex lg:flex-row flex-col lg:gap-4 gap-12 px-6">
                <div className="flex flex-col gap-10 flex-2/5">
                    <div className="flex gap-4 items-center">
                        <img src="confero.svg" alt="" />
                        <h3 className="text-2xl font-medium">
                            Confero Desktop
                        </h3>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <p className="px-4 py-2 bg-white/10 rounded-[8px]">
                            UI/UX Research
                        </p>
                        <p className="px-4 py-2 bg-white/10 rounded-[8px]">
                            Design System
                        </p>
                        <p className="px-4 py-2 bg-white/10 rounded-[8px]">
                            WEB Design
                        </p>
                        <p className="px-4 py-2 bg-white/10 rounded-[8px]">
                            Branding
                        </p>
                        <p className="px-4 py-2 bg-white/10 rounded-[8px]">
                            Corporate
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/artur-yurin/"
                        target="_blank"
                        className="btn-gradient content-center rounded-[4px] px-6 text-white/80 text-center h-10 w-fit"
                    >
                        Get in touch
                    </a>
                </div>
                <div className="flex flex-col gap-10 flex-3/5">
                    <div className="flex flex-col gap-4">
                        <p className="text-white/60">Problem</p>
                        <p className="text-white/90">
                            In today's fast-paced corporate environment, teams
                            often encounter difficulties in maintaining
                            effective communication and collaboration,
                            especially in remote settings. Employees may find it
                            hard to connect through traditional methods, leading
                            to misunderstandings and decreased productivity.
                            Many existing tools lack the integration needed for
                            seamless teamwork, resulting in frustration and
                            inefficiency.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white/60">Solition</p>
                        <p className="text-white/90">
                            Confero revolutionizes corporate communication with
                            its all-in-one platform designed for video calls,
                            messaging, and collaborative tools. The interface is
                            sleek and modern, featuring a clean layout that
                            enhances user experience. With customizable channels
                            and real-time updates, Confero ensures that teams
                            can communicate effortlessly, share ideas, and work
                            together effectively, no matter where they are. This
                            innovative approach fosters a culture of
                            collaboration and keeps teams engaged and
                            productive.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-10 px-6">
                <img
                    src="confero-desktop-2.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="confero-desktop/active-event.mp4"
                        type="video/mp4"
                    />
                </video>
                <img
                    src="confero-desktop-3.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <div>
                    <img
                        src="confero-desktop/Frame 01.jpg"
                        alt="about corporate messenger and video conferencing 01 Simplified navigation. Users can now find key functions faster and more intuitively 02 Faster meeting creation. The process is clearer, more flexible, and takes less time 03 Intuitive meeting management. Moderators can now react quickly and efficiently"
                        loading="lazy"
                        className="rounded-3xl w-full object-cover"
                    />
                    <img
                        src="confero-desktop/Frame 02.jpg"
                        alt="app UI"
                        loading="lazy"
                        className="rounded-3xl w-full object-cover"
                    />
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="confero-desktop/contacts.mp4"
                        type="video/mp4"
                    />
                </video>
                <img
                    src="confero-desktop/Frame 04.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="confero-desktop/Frame 06.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="confero-desktop/events (1080p).webm"
                        type="video/webm"
                    />
                    <source src="confero-desktop/events.mp4" type="video/mp4" />
                </video>
                <img
                    src="confero-desktop/Frame 12.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="confero-desktop/desktop-chats.mp4"
                        type="video/mp4"
                    />
                </video>
                <img
                    src="confero-desktop/Frame 14.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
            </section>
        </div>
    );
}
