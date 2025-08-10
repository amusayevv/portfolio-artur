"use client";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Nav from "../_components/nav";
import Footer from "../_components/footer";
import LazyLoadImage from "../_components/lazyLoadImage";

export default function page() {
    return (
        <div className="flex flex-col gap-20">
            <Nav />

            <img
                className="w-full h-dvh object-cover"
                src="project3.webp"
                alt="Laptop"
            />
            <section className="flex lg:flex-row flex-col lg:gap-4 gap-12 px-6">
                <div className="flex flex-col gap-10 flex-2/5">
                    <div className="flex gap-4 items-center">
                        <img src="confero.svg" alt="" />
                        <h3 className="text-2xl font-medium">Confero Mobile</h3>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="https://developing-allium-e20.notion.site/Confero-Mobile-App-20c5998c81ba813f9e43e8b3e522bb46"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Notion
                        </a>
                        <a
                            href="https://www.behance.net/gallery/222014563/Confero-Mobile-App"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Behance
                        </a>
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
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-mobile/event-video.jpg"
                >
                    <source
                        src="confero-mobile/event-video.mp4"
                        type="video/mp4"
                    />
                </video>

                <div>
                    <LazyLoadImage
                        srcLow="/confero-mobile/Frame 01 (2).jpg"
                        srcHigh="/confero-mobile/Frame 01.jpg"
                        alt="app UI"
                        classString="rounded-3xl w-full object-cover"
                    />
                    <LazyLoadImage
                        srcLow="/confero-mobile/Frame 16 (2).jpg"
                        srcHigh="/confero-mobile/Frame 16.jpg"
                        alt="app UI"
                        classString="rounded-3xl w-full object-cover"
                    />
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-mobile/chat.jpg"
                >
                    <source src="confero-mobile/chat.mp4" type="video/mp4" />
                </video>

                <LazyLoadImage
                    srcLow="/confero-mobile/Frame 17 (2).jpg"
                    srcHigh="/confero-mobile/Frame 17.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
                <LazyLoadImage
                    srcLow="/confero-mobile/Frame 19 (2).jpg"
                    srcHigh="/confero-mobile/Frame 19.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-mobile/contact-call.jpg"
                >
                    <source
                        src="confero-mobile/contact-call.mp4"
                        type="video/mp4"
                    />
                </video>
                <LazyLoadImage
                    srcLow="/confero-mobile/Frame 20 (2).jpg"
                    srcHigh="/confero-mobile/Frame 20.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
                <LazyLoadImage
                    srcLow="/confero-mobile/Frame 12 (2).jpg"
                    srcHigh="/confero-mobile/Frame 12.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-mobile/event-invite.jpg"
                >
                    <source
                        src="confero-mobile/event-invite.mp4"
                        type="video/mp4"
                    />
                </video>
                <LazyLoadImage
                    srcLow="/confero-desktop/Frame 14 (2).jpg"
                    srcHigh="/confero-desktop/Frame 14.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
            </section>
            <a
                href="https://developing-allium-e20.notion.site/Confero-Mobile-App-20c5998c81ba813f9e43e8b3e522bb46"
                className="button-link w-full lg:w-[30%] mr-auto ml-auto px-8 py-3 rounded-[0.5rem] font-semibold text-center"
                target="_blank"
            >
                See full project
            </a>

            <Footer />
        </div>
    );
}
