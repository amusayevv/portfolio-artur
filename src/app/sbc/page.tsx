"use client";
import Nav from "../_components/nav";
import Footer from "../_components/footer";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

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
                        <h3 className="text-2xl font-medium">
                            Confero Desktop
                        </h3>
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
                    src="sbc/slide1.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="sbc/slide2.png"
                            alt="UI elements"
                        />
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="sbc/slide3.png"
                            alt="2 phones"
                            loading="lazy"
                        />
                    </div>
                </div>
                <img
                    src="sbc/slide4.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="sbc/slide5.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="sbc/slide6.jpg"
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
                    <source src="sbc/slide7.mp4" type="video/mp4" />
                </video>
                <img
                    src="sbc/slide8.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="sbc/slide9.jpg"
                            alt="UI elements"
                        />
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="sbc/slide10.jpg"
                            alt="2 phones"
                            loading="lazy"
                        />
                    </div>
                </div>
                <img
                    src="sbc/slide11.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="sbc/slide12.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
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
                            <img
                                className="w-full object-cover rounded-3xl"
                                src="sbc/slide14-1.png"
                                alt="UI elements"
                            />
                            <img
                                className="w-full object-cover rounded-3xl"
                                src="sbc/slide14-2.png"
                                alt="UI elements"
                            />
                        </div>
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="sbc/slide15.png"
                            alt="2 phones"
                            loading="lazy"
                        />
                    </div>
                </div>
                <img
                    src="sbc/slide16.jpg"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
            </section>
            <Footer />
        </div>
    );
}
