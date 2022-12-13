import axios from "axios";

const myapi='AIzaSyAM5l9R6Ic8-3sJDWF6e-BzKFYc6w2Mrp0';

export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3/',
    //headers: {Authorization: `Client-ID ${myapi}`}
   // baseURL:'https://youtube.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key:myapi,
        type:'video'
    }
   
})