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
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className="bg-gray-950 text-white">
                <Nav />
                {children}
            </body>
        </html>
    );
}
