import { Manrope } from "next/font/google";
import Nav from "./_components/nav";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={manrope.className}>
            <body
                className="bg-gray-950 text-white pb-[600px]"
                style={{
                    background:
                        "radial-gradient(200% 20% at 50% 100%, #d5b3ff 0%, #806bbf 15%, #090828 40%, #030712 50%, #030712 100%), #0A0A0A",
                }}
            >
                <Nav />
                {children}
            </body>
        </html>
    );
}
