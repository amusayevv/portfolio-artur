"use client";
import { createRef, useEffect, useState } from "react";

export default function LazyLoadImage({
    srcHigh,
    alt,
    srcLow,
    classString,
}: {
    srcHigh: string;
    alt: string;
    srcLow: string;
    classString: string;
}) {
    const [src, setSrc] = useState(srcLow);
    const lazyImage = createRef<HTMLImageElement>();

    useEffect(() => {
        if (typeof window === "undefined" || !lazyImage.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSrc(srcHigh);
                    observer.disconnect();
                }
            },
            { rootMargin: "100px" }
        );

        observer.observe(lazyImage.current);

        return () => {
            observer.disconnect();
        };
    }, [lazyImage, srcHigh]);

    return <img className={classString} src={src} alt={alt} ref={lazyImage} />;
}
