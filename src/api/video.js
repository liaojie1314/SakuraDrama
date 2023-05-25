import video from "./request";

const getVideoUrl = (data) => {
  return video.post({
    url: "/getUrl",
    data,
  });
};
const getVideoInfo = (data) => {
  return video.post({
    url: "/getVideoInfo",
    data,
  });
};
const getComment1 = (data) => {
  return video.post({
    url: "/getComment1",
    data,
  });
};

const getComment2 = (data) => {
  return video.post({
    url: "/getComment2",
    data,
  });
};

const postComment = (data) => {
  return video.post({
    url: "/makeComment",
    data,
  });
};

const thumbUp = (data)=>{
  return video.post({
    url: "/commentLike",
    data,
  });
}

const upload = (data)=>{
  return video.post({
    url: "/upload",
    data,
  });
}


const download = (data)=>{
  return video.post({
    url: "/download",
    data,
  });
}

export default {
  getComment1,
  getComment2,
  postComment,
  getVideoInfo,
  getVideoUrl,
  thumbUp,
  upload,
  download
};
