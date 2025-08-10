"use client";
import Nav from "../_components/nav";
import Footer from "../_components/footer";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import LazyLoadImage from "../_components/lazyLoadImage";

export default function page() {
    return (
        <div className="flex flex-col gap-20">
            <Nav />

            <img
                className="w-full h-dvh object-cover"
                src="project5.webp"
                alt="Laptop"
            />
            <section className="flex lg:flex-row flex-col lg:gap-4 gap-12 px-6">
                <div className="flex flex-col gap-10 flex-2/5">
                    <div className="flex gap-4 items-center">
                        <img src="sbc.svg" alt="" />
                        <h3 className="text-2xl font-medium">SBC Admin</h3>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="https://www.notion.so/OLD-SBC-Admin-System-1425998c81ba8089a5a2d144c3d54d04"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Notion
                        </a>
                        <a
                            href="https://www.figma.com/design/asBkbyvn7JpruNhSZoCQA8/SBC-Portfolio-Case?node-id=0-1&node-type=canvas&t=QCuzH4fwJ3JFDFpi-0"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Figma
                        </a>
                        <a
                            href="https://www.behance.net/gallery/218241823/SBC-Admin-System"
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
                    srcLow="/sbc/slide1 (2).jpg"
                    srcHigh="/sbc/slide1.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />

                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="/sbc/slide2 (2).jpg"
                            srcHigh="/sbc/slide2.png"
                            alt="app UI"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="/sbc/slide3 (2).jpg"
                            srcHigh="/sbc/slide3.png"
                            alt="app UI"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
                <LazyLoadImage
                    srcLow="/sbc/slide4 (2).jpg"
                    srcHigh="/sbc/slide4.jpg"
                    alt="app UI"
                    classString="w-full h-full object-contain rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="/sbc/slide5 (2).jpg"
                    srcHigh="/sbc/slide5.jpg"
                    alt="app UI"
                    classString="w-full object-cover rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="/sbc/slide5 (2).jpg"
                    srcHigh="/sbc/slide5.jpg"
                    alt="app UI"
                    classString="w-full object-cover rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="/sbc/slide6 (2).jpg"
                    srcHigh="/sbc/slide6.jpg"
                    alt="app UI"
                    classString="w-full object-cover rounded-3xl"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="sbc/slide7.jpg"
                >
                    <source src="sbc/slide7.mp4" type="video/mp4" />
                </video>
                <LazyLoadImage
                    srcLow="/sbc/slide8 (2).jpg"
                    srcHigh="/sbc/slide8.jpg"
                    alt="app UI"
                    classString="w-full object-cover rounded-3xl"
                />
                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="/sbc/slide9 (2).jpg"
                            srcHigh="/sbc/slide9.jpg"
                            alt="app UI"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="/sbc/slide10 (2).jpg"
                            srcHigh="/sbc/slide10.jpg"
                            alt="app UI"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
                <LazyLoadImage
                    srcLow="/sbc/slide11 (2).jpg"
                    srcHigh="/sbc/slide11.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
                <LazyLoadImage
                    srcLow="/sbc/slide12 (2).jpg"
                    srcHigh="/sbc/slide12.png"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
                <img
                    src="sbc/slide13.gif"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <div className="flex flex-col justify-between h-full">
                            <LazyLoadImage
                                srcLow="/sbc/slide14-1.webp"
                                srcHigh="/sbc/slide14-1.png"
                                alt="app UI"
                                classString="w-full object-cover rounded-3xl"
                            />
                            <LazyLoadImage
                                srcLow="/sbc/slide14-2.webp"
                                srcHigh="/sbc/slide14-2.png"
                                alt="app UI"
                                classString="w-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="/sbc/slide15.jpg"
                            srcHigh="/sbc/slide15.png"
                            alt="app UI"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
                <LazyLoadImage
                    srcLow="/sbc/slide16 (2).jpg"
                    srcHigh="/sbc/slide16.jpg"
                    alt="app UI"
                    classString="rounded-3xl w-full object-cover"
                />
            </section>
            <a
                href="https://www.notion.so/OLD-SBC-Admin-System-1425998c81ba8089a5a2d144c3d54d04?source=copy_link"
                className="button-link w-[30%] mr-auto ml-auto px-8 py-3 rounded-[0.5rem] font-semibold text-center"
                target="_blank"
            >
                See full project
            </a>

            <Footer />
        </div>
    );
}
