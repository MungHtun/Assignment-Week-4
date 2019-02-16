const rootURL = "https://api.themoviedb.org/3/";
const upcoming = "movie/upcoming?api_key=<<api_key>>&language=en-US&page=<<page>>";
//const detail = "movie/{movie_id}/videos?api_key=<<api_key>>";
const detail = "movie/{movie_id}?api_key=<<api_key>>";
const key = "8413c1616b9c4dc875ac1b733e076355";

function getUpcomingApiUrl(key){
    return rootURL + upcoming.replace("<<api_key>>",key);
}

function getDetailApiUrl(movie_id,key){   
    return rootURL + detail.replace("{movie_id}",movie_id).replace("<<api_key>>",key);
}

export {getUpcomingApiUrl,getDetailApiUrl,key};