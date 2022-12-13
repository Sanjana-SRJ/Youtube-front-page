import React from "react";

const VideoItem =({videonew, onVideoSelect})=>
{
    return (<div onClick={()=>onVideoSelect(videonew)}>
            <img src={videonew.snippet.thumbnails.medium.url} alt={videonew.snippet.title}/>
            <h4>{videonew.snippet.title}</h4>
    </div>)
}

export default VideoItem;