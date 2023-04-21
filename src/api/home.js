import home from "./request";

const getRank = (data) => {
  return home.get({
    url: "/rank",
  });
};

const getPictures = (data) => {
  return home.get({
    url: "/pictures",
  });
};
const getAnime = (data) => {
  return home.get({
    url: "/anime",
  });
};
const getMovie = (data) => {
  return home.get({
    url: "/movie",
  });
};
const getTV = (data) => {
  return home.get({
    url: "/tv",
  });
};
const getVariety = (data) => {
  return home.get({
    url: "/variety",
  });
};
const getRotate = (data) => {
  return home.get({
    url: "/rotate",
  });
};

const getHistory = (data) => {
  return home.post({
    url:"/getHistory",
    data
  })
}

export default {
  getRank,
  getPictures,
  getAnime,
  getMovie,
  getTV,
  getVariety,
  getRotate,
  getHistory
};
