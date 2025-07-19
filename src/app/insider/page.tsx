import Footer from "../_components/footer";
import Nav from "../_components/nav";

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
                            WEB3
                        </p>
                        <p className="px-4 py-2 bg-white/10 rounded-[8px]">
                            Crypto
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
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="insider-videos/Notion (1080).webm"
                        type="video/webm"
                    />
                    <source src="insider-videos/Notion.mp4" type="video/mp4" />
                </video>

                <img
                    className="w-full h-full object-contain rounded-3xl"
                    src="screeeeen.jpg"
                    alt="blue"
                    loading="lazy"
                />
                <div className="flex flex-row w-full gap-4 aspect-[9/5]">
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="Frame 1618868892.jpg"
                            alt="UI elements"
                        />
                    </div>
                    <div className="flex-1 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="Rectangle 2096.jpg"
                            alt="2 phones"
                            loading="lazy"
                        />
                    </div>
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="insider-videos/Horizontal-video-1 4K (1080p).webm"
                        type="video/webm"
                    />
                    <source
                        src="insider-videos/horizontal-video-1 4k (1080p).mp4"
                        type="video/mp4"
                    />
                </video>

                <img
                    className="w-full h-full object-contain object-bottom-left rounded-3xl"
                    src="insider-1.jpg"
                    alt="blue"
                />
                <div className="flex w-full gap-4">
                    <img
                        className="flex-1 w-0 rounded-3xl object-cover"
                        src="Frame 1618868889.jpg"
                        alt="UI elements"
                    />
                    <img
                        className="flex-1 w-0 rounded-3xl object-cover"
                        src="Frame 1618868890.jpg"
                        alt="2 phones"
                    />
                </div>
                <img
                    className="w-full h-full object-contain object-bottom-left rounded-3xl"
                    src="Frame 1618868895.jpg"
                    alt="blue"
                />
                <img
                    className="w-full h-full object-contain object-bottom-left rounded-3xl"
                    src="Frame 1618868899.webp"
                    alt="blue"
                />
                <img
                    className="w-full h-full object-contain object-bottom-left rounded-3xl"
                    src="mobile-insider.jpg"
                    alt="blue"
                />
                <img
                    className="w-full h-full object-contain object-bottom-left rounded-3xl"
                    src="mobile-insider-22.jpg"
                    alt="blue"
                />
                <video
                    src="insider-videos/horizontal-video-2 4k.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl"
                >
                    <source
                        src="insider-videos/Horizontal-video-2 4K (1080p).webm"
                        type="video/webm"
                    />
                    <source
                        src="insider-videos/horizontal-video-2 4k (1080p).mp4"
                        type="video/mp4"
                    />
                </video>
            </section>

            <Footer />
        </div>
    );
}
