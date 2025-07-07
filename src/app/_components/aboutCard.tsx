export default function AboutCard({
    title,
    subtitle,
    description,
}: {
    title: string;
    subtitle: string;
    description: string;
}) {
    return (
        <div className="hover:text-white p-10 w-[400px] h-[400px] flex flex-col justify-between outline-1 outline-gray-600">
            <div className="flex flex-col gap-2">
                <h3 className="scrambleText text-6xl flex items-start">
                    {title}
                </h3>
                <p>{subtitle}</p>
            </div>
            <p>{description} </p>
        </div>
    );
}
