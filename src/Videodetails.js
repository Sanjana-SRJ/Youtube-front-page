import React from "react";
const VideoDetails = ({video}) =>
{
    if (!video){
        return<>(loading....)</>
    }
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return 
    <>
    <iframe src={videosrc}></iframe>
    </>
} 

export default VideoDetails;