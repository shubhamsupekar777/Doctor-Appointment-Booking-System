import React,{useContext,useEffect,useState} from "react";
import axios from "axios";
import {AppContext} from "../context/AppContext";

const MedicalVideos=()=>{
    const {backendUrl}=useContext(AppContext);
    const [videos,setVideos]=useState([]);
    const [query,setQuery]=useState("medical health education");
    const [loading,setLoading]=useState(false);
    const [selected,setSelected]=useState(null);

    const fetchVideos=async(search=query)=>{
        try{
            setLoading(true);

            const {data}=await axios.get(
                `${backendUrl}/api/video?query=${encodeURIComponent(search)}`
            );

            if(data.success)setVideos(data.videos);
            else alert(data.message||"Failed to load videos");
        }catch(error){
            console.log(error);
            alert(error.response?.data?.message||"Failed to load medical videos");
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchVideos();
    },[]);

    const categories=[
        "General Health",
        "Diabetes",
        "Heart Health",
        "Blood Pressure",
        "Nutrition",
        "Exercise",
        "Mental Health",
        "First Aid"
    ];

    return(
        <div className="max-w-6xl mx-auto">
            <div className="mb-7">
                <h2 className="text-2xl font-semibold text-gray-800">Medical Videos</h2>
                <p className="text-gray-500 mt-1">
                    Learn about health and wellness through educational videos.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                    <input
                        value={query}
                        onChange={e=>setQuery(e.target.value)}
                        onKeyDown={e=>e.key==="Enter"&&fetchVideos()}
                        placeholder="Search medical topic..."
                        className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#635BFF]"
                    />

                    <button
                        onClick={()=>fetchVideos()}
                        className="px-6 py-3 rounded-xl bg-[#635BFF] text-white font-medium"
                    >
                        Search
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {categories.map(category=>(
                        <button
                            key={category}
                            onClick={()=>{
                                setQuery(category);
                                fetchVideos(category);
                            }}
                            className="px-4 py-2 rounded-full bg-[#F5F6FF] text-[#4338CA] text-sm hover:bg-[#E6E9FF]"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {loading&&(
                <div className="bg-white border rounded-2xl p-10 text-center">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-[#635BFF] rounded-full animate-spin mx-auto"/>
                    <p className="text-gray-500 mt-4">Loading medical videos...</p>
                </div>
            )}

            {!loading&&videos.length>0&&(
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {videos.map(video=>(
                        <div
                            key={video.videoId}
                            onClick={()=>setSelected(video)}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full aspect-video object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800">
                                    {video.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    {video.channelTitle}
                                </p>

                                <button className="mt-3 text-sm font-medium text-[#635BFF]">
                                    ▶ Watch Video
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading&&videos.length===0&&(
                <div className="bg-white border rounded-2xl p-10 text-center text-gray-500">
                    No medical videos found.
                </div>
            )}

            {selected&&(
                <div
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                    onClick={()=>setSelected(null)}
                >
                    <div
                        className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden"
                        onClick={e=>e.stopPropagation()}
                    >
                        <div className="aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${selected.videoId}`}
                                title={selected.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {selected.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {selected.channelTitle}
                            </p>

                            <button
                                onClick={()=>setSelected(null)}
                                className="mt-4 px-5 py-2 rounded-lg bg-gray-100 text-gray-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <p className="text-xs text-gray-400 text-center mt-8">
                Medical videos are provided for educational purposes and do not replace professional medical advice.
            </p>
        </div>
    );
};

export default MedicalVideos;