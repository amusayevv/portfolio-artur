export default function PortfolioCard({
    imgpath,
    logopath,
    url,
    title,
    description,
}: {
    imgpath: string;
    logopath: string;
    url: string;
    title: string;
    description: string;
}) {
    return (
        <div>
            <div className="grid gap-6">
                <a
                    href={url}
                    className="project rounded-2xl h-[480px] bg-cover bg-center bg-zoom-transition"
                    style={{ backgroundImage: `url(${imgpath})` }}
                    title={title}
                ></a>
            </div>
        </div>
    );
}
