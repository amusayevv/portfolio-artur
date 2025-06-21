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
            <body className="bg-gray-950 text-white">
                <Nav />
                {children}
            </body>
        </html>
    );
}
