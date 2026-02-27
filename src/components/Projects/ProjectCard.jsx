export default function ProjectCard({ data }) {
    return (
        <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
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
