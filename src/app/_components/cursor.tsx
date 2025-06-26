import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Cursor({ text }: { text: string }) {
    const [isProjectHover, setIsProjectHover] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            gsap.to("#cursor", {
                x: clientX,
                y: clientY,
            });
        };

        const handleMouseEnter = () => setIsProjectHover(true);
        const handleMouseLeave = () => setIsProjectHover(false);

        window.addEventListener("mousemove", handleMouseMove);

        const projects = document.querySelectorAll(".project");
        projects.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            projects.forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            id="cursor"
            className="bg-white/10 backdrop-blur-md p-3 rounded-[8px] fixed select-none text-white/80 font-semibold z-[100] text-xs transition-opacity duration-200"
            style={{ opacity: isProjectHover ? 1 : 0 }}
        >
            {text}
        </div>
    );
}
