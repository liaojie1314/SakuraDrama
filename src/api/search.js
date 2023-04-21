import search from "./request";

const searchApi = (data) => {
  return search.post({
    url: "/search",
    data,
  });
};

export default { searchApi };
