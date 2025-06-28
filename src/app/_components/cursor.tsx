import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Cursor({ text }: { text: string }) {
    const [isProjectHover, setIsProjectHover] = useState(false);

    useEffect(() => {
        const xTo = gsap.quickTo("#cursor", "x", {
            duration: 0.3,
            ease: "power3",
        });
        const yTo = gsap.quickTo("#cursor", "y", {
            duration: 0.3,
            ease: "power3",
        });
        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        const handleMouseEnter = () => setIsProjectHover(true);
        const handleMouseLeave = () => setIsProjectHover(false);

        window.addEventListener("mousemove", handleMouseMove);

        const projects = document.querySelectorAll(".project");
        projects.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            id="cursor"
            className="bg-white/10 backdrop-blur-md p-3 rounded-[8px] fixed select-none text-white/80 font-semibold z-[100] text-xs transition-opacity duration-200 pointer-events-none"
            style={{ opacity: isProjectHover ? 1 : 0 }}
        >
            {text}
        </div>
    );
}
