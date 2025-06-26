export default function Nav() {
    return (
        <nav className="flex justify-between mt-4 pl-6 pr-2 bg-white/10 p-2 h-[48px] inset-shadow-2xs inset-shadow-gray-600 w-[1100px] rounded-[8px] backdrop-blur-sm fixed left-1/2 -translate-x-1/2 z-50">
            <img src="/logo.svg" alt="" className="logo" />
            <ul className="w-[726px] flex text-white/80 text-center">
                <li className="w-full bg-white/10 content-center rounded-[4px]">
                    <a href="#">Home</a>
                </li>
                <li className="w-full content-center">
                    <a href="#">About</a>
                </li>
                <li className="w-full content-center">
                    <a href="#">Pricing</a>
                </li>
                <li className="w-full content-center">
                    <a href="#">Portfolio</a>
                </li>
                <li className="w-full content-center">
                    <a href="#">Services</a>
                </li>
                <li className="w-full content-center">
                    <a href="#">Reviews</a>
                </li>
                <li className="w-full content-center">
                    <a href="#">Contact</a>
                </li>
            </ul>
            <a
                className="bg-white/10 text-white content-center rounded-[4px] px-6"
                href="#"
            >
                Book a call
            </a>
        </nav>
    );
}
