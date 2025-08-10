import Footer from "../_components/footer";
import Nav from "../_components/nav";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import LazyLoadImage from "../_components/lazyLoadImage";

export default function Page() {
    return (
        <div className="flex flex-col gap-20">
            <Nav />

            <img
                className="w-full h-dvh object-cover"
                src="Homescreen Mockup.webp"
                alt="Laptop"
            />

            <section className="flex lg:flex-row flex-col lg:gap-4 gap-12 px-6">
                <div className="flex flex-col gap-10 flex-2/5">
                    <div className="flex gap-4 items-center">
                        <img src="insider.svg" alt="star logo" />
                        <h3 className="text-2xl font-medium">Insider</h3>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="https://myinsider.club/en/login"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Platform
                        </a>
                        <a
                            href="https://developing-allium-e20.notion.site/Insider-Platform-20c5998c81ba81cd821cc85d70dcc40c"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Notion
                        </a>
                        <a
                            href="https://www.figma.com/design/wBD03wOApwbAIpTN2GKXOE/Insider-NEW?node-id=349-7685&node-type=canvas&t=VPp0DWLlIH6o55TP-0"
                            target="_blank"
                            className="px-4 py-2 bg-white/10 rounded-[8px] flex gap-2 items-center"
                        >
                            <ExternalLinkIcon />
                            Figma
                        </a>
                        <a
                            href="https://www.behance.net/gallery/215605467/Insider"
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
                            In the rapidly evolving world of cryptocurrency,
                            users often face an overwhelming influx of complex
                            information and poorly organized resources.
                            Beginners may struggle to find reliable, digestible
                            learning tools, while experienced traders lack
                            platforms that adapt to their growing knowledge.
                            Most existing dashboards are cluttered or
                            unintuitive, creating friction in the learning
                            journey and discouraging continuous engagement.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-white/60">Solition</p>
                        <p className="text-white/90">
                            The INSIDER Crypto Learning Platform Dashboard
                            addresses these challenges through a visually
                            striking and user-friendly interface that
                            streamlines the educational experience. Featuring a
                            modern dark theme with vibrant blue highlights, it
                            caters to users of all skill levels by providing
                            intuitive navigation, personalized content curation,
                            and real-time learning insights. This thoughtful
                            design empowers users to confidently explore,
                            understand, and advance their crypto knowledge in a
                            sleek and immersive environment.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-10 px-6">
                <LazyLoadImage
                    srcLow="screeeeen480.jpg"
                    srcHigh="screeeeen.jpg"
                    alt="creen with 3 rectangles"
                    classString="w-full h-full object-contain rounded-3xl"
                />
                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="Frame 1618868892 480.jpg"
                            srcHigh="Frame 1618868892.jpg"
                            alt="UI screen"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <LazyLoadImage
                            srcLow="Rectangle 2096 (2).jpg"
                            srcHigh="Rectangle 2096.jpg"
                            alt="UI screen"
                            classString="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="insider-videos/launchpad.jpg"
                >
                    <source
                        src="insider-videos/launchpad.mp4"
                        type="video/mp4"
                    />
                </video>

                <LazyLoadImage
                    srcLow="insider-1 (2).jpg"
                    srcHigh="insider-1.jpg"
                    alt="UI screen"
                    classString="w-full h-full object-contain object-bottom-left rounded-3x"
                />

                <div className="flex w-full gap-4">
                    <LazyLoadImage
                        srcLow="Frame 1618868889 480.jpg"
                        srcHigh="Frame 1618868889.jpg"
                        alt="UI screen"
                        classString="flex-1 w-0 rounded-3xl object-cover"
                    />
                    <LazyLoadImage
                        srcLow="Frame 1618868890 480.jpg"
                        srcHigh="Frame 1618868890.jpg"
                        alt="UI screen"
                        classString="flex-1 w-0 rounded-3xl object-cover"
                    />
                </div>
                <LazyLoadImage
                    srcLow="Frame 1618868895 (2).jpg"
                    srcHigh="Frame 1618868895.jpg"
                    alt="UI screen"
                    classString="w-full h-full object-contain object-bottom-left rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="Frame 1618868899 (2).webp"
                    srcHigh="Frame 1618868899.webp"
                    alt="UI screen"
                    classString="w-full h-full object-contain object-bottom-left rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="mobile-insider (2).jpg"
                    srcHigh="mobile-insider.jpg"
                    alt="UI screen"
                    classString="w-full h-full object-contain object-bottom-left rounded-3xl"
                />
                <LazyLoadImage
                    srcLow="mobile-insider-22 (2).jpg"
                    srcHigh="mobile-insider-22.jpg"
                    alt="UI screen"
                    classString="w-full h-full object-contain object-bottom-left rounded-3xl"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                    poster="insider-videos/trading-bot.jpg"
                >
                    <source
                        src="insider-videos/trading-bot.mp4"
                        type="video/mp4"
                    />
                </video>
                <a
                    href="https://developing-allium-e20.notion.site/Insider-Platform-20c5998c81ba81cd821cc85d70dcc40c"
                    className="button-link w-[30%] mr-auto ml-auto px-8 py-3 rounded-[0.5rem] font-semibold text-center"
                    target="_blank"
                >
                    See full project
                </a>
            </section>

            <Footer />
        </div>
    );
}
