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
                        <a
                            href="https://www.notion.so/OLD-Confero-Web-Desktop-19d5998c81ba8047b2b0fc5e592f8867"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Notion
                        </a>
                        <a
                            href="https://www.behance.net/gallery/222422801/Confero-Web-Desktop"
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
                <LazyLoadImage
                    srcLow="/confero-desktop/confero-desktop-2 (2).jpg"
                    srcHigh="/confero-desktop/confero-desktop-2.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-desktop/active-event.jpg"
                >
                    <source
                        src="confero-desktop/active-event.mp4"
                        type="video/mp4"
                    />
                </video>

                <LazyLoadImage
                    srcLow="/confero-desktop/confero-desktop-3 (2).jpg"
                    srcHigh="/confero-desktop/confero-desktop-3.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />

                <div>
                    <LazyLoadImage
                        srcLow="/confero-desktop/Frame 01 (2).jpg"
                        srcHigh="/confero-desktop/Frame 01.jpg"
                        alt="about corporate messenger and video conferencing 01 Simplified navigation. Users can now find key functions faster and more intuitively 02 Faster meeting creation. The process is clearer, more flexible, and takes less time 03 Intuitive meeting management. Moderators can now react quickly and efficiently"
                        classString="rounded-3xl w-full object-cover"
                    />
                    <LazyLoadImage
                        srcLow="/confero-desktop/Frame 02 (2).jpg"
                        srcHigh="/confero-desktop/Frame 02.jpg"
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
                    poster="confero-desktop/contacts.jpg"
                >
                    <source
                        src="confero-desktop/contacts.mp4"
                        type="video/mp4"
                    />
                </video>
                <LazyLoadImage
                    srcLow="/confero-desktop/Frame 04 (2).jpg"
                    srcHigh="/confero-desktop/Frame 04.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="/confero-desktop/Frame 06 (2).jpg"
                    srcHigh="/confero-desktop/Frame 06.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-desktop/events.jpg"
                >
                    <source src="confero-desktop/events.mp4" type="video/mp4" />
                </video>
                <LazyLoadImage
                    srcLow="/confero-desktop/Frame 12 (2).jpg"
                    srcHigh="/confero-desktop/Frame 12.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="confero-desktop/desktop-chats.jpg"
                >
                    <source
                        src="confero-desktop/desktop-chats.mp4"
                        type="video/mp4"
                    />
                </video>
                <LazyLoadImage
                    srcLow="/confero-desktop/Frame 14 (2).jpg"
                    srcHigh="/confero-desktop/Frame 14.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />
            </section>
            <Footer />
        </div>
    );
}
