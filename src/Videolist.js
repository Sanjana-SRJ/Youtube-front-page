import React from 'react';
import VideoItem from './VideoItem';
//import VideoItem from './VideoItem';


const VideoList = ({vid, onVideoSelect}) => {
    const myrend  = vid.map((video)=>{
       return <VideoItem key={video.id.videoId} onVideoSelect= {onVideoSelect} videonew={video}/>
    })
      
    return <div className='ui relaxed divided list'>{ myrend}</div>;
};
export default VideoList;