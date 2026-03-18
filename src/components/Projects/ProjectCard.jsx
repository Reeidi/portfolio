export default function ProjectCard({ data, onOpen }) {
    return (
        <button
            type="button"
            onClick={() => onOpen(data)}
            className="max-w-106 h-full w-full rounded-lg bg-white outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 flex flex-col text-left cursor-pointer overflow-hidden"
            aria-label={`Open details for ${data?.title}`}
        >
            <div className="h-70 flex items-center">
                <img src={data?.image} alt={`${data?.title} image`} className="max-h-70 min-w-70 mx-auto" />
            </div>

            <div className="p-4 xs:p-8 flex-1">
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
        </button>
    );
};
