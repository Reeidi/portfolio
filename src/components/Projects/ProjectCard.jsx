export default function ProjectCard({ data, isVisible = true, delayMs = 0 }) {
    return (
        <div
            style={{ transitionDelay: `${delayMs}ms` }}
            className={`max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
            <div className="h-70 flex items-center">
                <img src={data?.image} alt={`${data?.title} image`} className="max-h-70 min-w-70 mx-auto" />
            </div>

            <div className="p-4 xs:p-8">
                <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
                <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
                    {data?.title}
                </p>
                <p
                    style={{ lineHeight: "20px", letterSpacing: "0%" }}
                    className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
                >
                    {data?.description}
                </p>
            </div>
        </div>
    );
};
