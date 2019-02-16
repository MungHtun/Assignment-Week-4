import Movie from '/js/Movie.js';

function readData(data, moviearray = []) {
    //console.log(data);
    for (let movie of data.results) {
        const movieObj = new Movie(movie.id, movie.title, movie.poster_path, movie.overview, "");
        moviearray.push(movieObj);
    }
    return moviearray;
}

function displayMovies(moviearray, template, viewport) {
    for (let movie of moviearray) {

        viewport.innerHTML += movie.render(template);

    }
}

function readDetail(data) {
    let companyName = "";
    const tempCompany = []
    for (var i = 0, l = data.production_companies.length; i < l; i++) {
        tempCompany.push(data.production_companies[i].name);
    }
    companyName = tempCompany.join(', ');

    let genresName = '';
    const tempGenres = []
    for (var i = 0, l = data.genres.length; i < l; i++) {
        tempGenres.push(data.genres[i].name);
    }
    genresName = tempGenres.join(', ');

    const detailObj = new Movie(data.id, data.title, data.poster_path, data.overview, "", genresName, companyName, data.runtime, data.release_date);
    return detailObj;
}

function displayDetail(detailObj, template, viewport) {
    viewport.innerHTML = detailObj.render(template);
}

function clearDetail() {
    viewport.innerHTML = "";
}



export { readData, displayMovies, readDetail, displayDetail, clearDetail };