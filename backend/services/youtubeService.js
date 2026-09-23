const getYouTubeVideos = async (query) => {
    const params = new URLSearchParams({
        part: "snippet",
        q: query,
        type: "video",
        maxResults: "12",
        order: "relevance",
        safeSearch: "strict",
        regionCode: "IN",
        relevanceLanguage: "en",
        videoEmbeddable: "true",
        key: process.env.YOUTUBE_API_KEY
    });

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${params}`
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error?.message || "YouTube API request failed");
    }

    return data.items.map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url
    }));
};

export default getYouTubeVideos;