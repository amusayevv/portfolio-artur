"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Nav from "../_components/nav";
import Footer from "../_components/footer";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function page() {
    return (
        <div className="flex flex-col gap-20">
            <Nav />

            <img
                className="w-full h-dvh object-cover"
                src="/design-system/image.webp"
                alt="Laptop"
            />
            <section className="flex lg:flex-row flex-col lg:gap-4 gap-12 px-6">
                <div className="flex flex-col gap-10 flex-2/5">
                    <div className="flex gap-2 items-center">
                        <img
                            src="design-system/Frame_17.png"
                            alt="Synto logo"
                            className="w-[64px] h-[64px]"
                        />
                        <h3 className="text-2xl font-medium">
                            Synto Design System
                        </h3>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="https://developing-allium-e20.notion.site/Synto-Design-System-22b5998c81ba8054af7fcc0e722dc13c?pvs=143"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Notion
                        </a>
                        <a
                            href="https://www.figma.com/design/tgJvw3gJTraZGHGdwNh7e9/Synto?node-id=0-1&t=SNFUpFiUSieBc44G-1"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Figma
                        </a>
                    </div>{" "}
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
                        <p className="text-white/90 flex flex-col gap-4">
                            The system we had didn’t work well anymore:
                        </p>
                        <ul className="list-[circle] pl-4 flex flex-col gap-2">
                            <li>
                                Designers often detached components and changed
                                them manually
                            </li>
                            <li>
                                Developers didn’t have a clear source of truth
                            </li>
                            <li>
                                Tokens didn’t exist, colors and spacing were
                                added by hand
                            </li>
                            <li>
                                Components were outdated, without variants or
                                responsive layout
                            </li>
                            <li>There was no documentation at all</li>
                        </ul>
                        <p>
                            Each product looked different. Sometimes even
                            screens inside the same product had no connection in
                            style. When new teams joined, they couldn’t rely on
                            the system and started creating their own. This made
                            everything worse. <br />
                            <br /> Eventually, it slowed down the entire
                            workflow. It wasn’t just a design problem, it became
                            a team and business problem.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white/60">Solition</p>
                        <p className="text-white/90">
                            To address these issues, a comprehensive design
                            system was developed with a structured, step-by-step
                            process. The solution started with a thorough audit
                            and planning phase to understand team needs and pain
                            points. Color, typography, and spacing tokens were
                            introduced, and component libraries were modularized
                            for better scalability. Core UI components (such as
                            buttons, checkboxes, and inputs) were rebuilt with
                            responsiveness, auto layout, theme support, and
                            usage tips, while more complex shared components
                            (headers, panels, layouts) followed. The system
                            emphasized real-world feedback and continuous
                            iteration, with team-specific designers refactoring
                            legacy layouts. The result was faster workflows,
                            cleaner UIs, improved collaboration, and greater
                            business agility, as teams shared a consistent,
                            reliable foundation for design across all products.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-10 px-6">
                <img
                    src="design-system/image (1).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (2).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (3).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (4).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (5).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (6).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (7).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (8).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (9).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
                <img
                    src="design-system/image (10).webp"
                    alt="app UI"
                    loading="lazy"
                    className="rounded-3xl w-full object-cover"
                />
            </section>
            <a
                href="https://developing-allium-e20.notion.site/Synto-Design-System-22b5998c81ba8054af7fcc0e722dc13c?pvs=143"
                className="button-link w-full lg:w-[30%] mr-auto ml-auto px-8 py-3 rounded-[0.5rem] font-semibold text-center"
                target="_blank"
            >
                See full project
            </a>

            <Footer />
        </div>
    );
}
