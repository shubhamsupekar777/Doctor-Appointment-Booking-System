import getYouTubeVideos from "../services/youtubeService.js";

const getVideos = async (req,res) => {
    try {
        const query = req.query.query || "medical health education";
        const videos = await getYouTubeVideos(query);

        res.json({
            success:true,
            videos
        });
    } catch(error) {
        console.log(error.message);

        res.json({
            success:false,
            message:"Failed to fetch medical videos"
        });
    }
};

export { getVideos };