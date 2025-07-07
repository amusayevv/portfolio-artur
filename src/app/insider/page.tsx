export default function Page() {
    return (
        <div className="flex flex-col gap-20">
            <img
                className="w-full h-dvh object-cover"
                src="Homescreen Mockup.webp"
                alt="Laptop"
            />

            <section className="flex gap-4 px-6">
                <div className="flex flex-col gap-10 flex-2/5">
                    <div className="flex gap-4 items-center">
                        <img src="insider.svg" alt="" />
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
                <div className="relative w-full h-dvh overflow-hidden flex items-end rounded-3xl">
                    <img
                        className="w-full h-full object-cover"
                        src="screeeeen.jpg"
                        alt="blue"
                    />
                </div>
                <div className="flex w-full gap-4">
                    <img
                        className="flex-1 w-0 h-dvh rounded-3xl object-cover"
                        src="Frame 1618868892.jpg"
                        alt="UI elements"
                    />
                    <img
                        className="flex-1 w-0 h-dvh rounded-3xl object-cover"
                        src="Rectangle 2096.jpg"
                        alt="2 phones"
                    />
                </div>
                <img
                    className="w-full h-dvh object-cover object-bottom-left rounded-3xl"
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
                    className="w-full h-dvh object-cover object-bottom-left rounded-3xl"
                    src="Frame 1618868895.jpg"
                    alt="blue"
                />
                <img
                    className="w-full object-cover object-bottom-left rounded-3xl"
                    src="Frame 1618868899.webp"
                    alt="blue"
                />
            </section>
        </div>
    );
}
