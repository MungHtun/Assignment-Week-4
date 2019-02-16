import { readData, displayMovies, readDetail, displayDetail,clearDetail } from '/js/main.js';
import { getUpcomingApiUrl, getDetailApiUrl, key } from '/js/api_url.js';
const infoTemplate = document.getElementById("movie-info-template").innerHTML;
const detailTemplate = document.getElementById("movie-detail-template").innerHTML;
const viewport = document.getElementById("viewport");


fetch(getUpcomingApiUrl(key))
  .then(res => res.json())
  .then(data => readData(data))
  .then((moviearray) => displayMovies(moviearray, infoTemplate, viewport));


document.addEventListener("click", function (evt) {
  const movie_id = evt.target.id;
  clearDetail();
  if (movie_id == "") {
    fetch(getUpcomingApiUrl(key))
      //.then(() => clearDetail())
      .then(res => res.json())
      .then(data => readData(data))      
      .then((moviearray) => displayMovies(moviearray, infoTemplate, viewport));
  }else{
    fetch(getDetailApiUrl(movie_id, key))
    .then(res => res.json())
    .then(data => readDetail(data))
    .then((detailObj) => displayDetail(detailObj, detailTemplate, viewport));
  }

  
});




