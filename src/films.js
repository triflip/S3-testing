  function getAllDirectors(array) {
  let result = array.map(film => film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

function getMoviesFromDirector(array, director) {
 let result = array.filter(film => film.director === director);
 console.log("EXERCISE 2 ->", result);
 return result;
}

function moviesAverageOfDirector(array, director) {
 let filtered = array.filter(film => film.director === director);
 if (filtered.length === 0) return 0;
 let totalScore = filtered.reduce((acc , film) => acc + film.score, 0);
 let result = Number((totalScore / filtered.length).toFixed(2));
 console.log("EXERCISE 3 ->", result);
 return result;
}

function orderAlphabetically(array) {
  let titles = array.map(film => film.title);
  let ordered = titles.sort();
  let result = ordered.slice(0, 20);
  console.log("EXERCISE 4 ->", result);
  return result ;
}

function orderByYear(array) {
  let films = [...array];
  films.sort((x, y) => {
  if ( x.year !== y.year)
  return x.year - y.year;
  return x.title.localeCompare(y.title);
  });
   
  console.log("EXERCISE 5 ->", films);
  return films;
}


function moviesAverageByCategory(array,genre) {
  if (!genre || !Array.isArray(array)) return 0;
  let filteredFilms= array.filter(film => film.genre.includes(genre));  
  if (filteredFilms.length === 0) return 0; 
  let totalScore = filteredFilms.reduce((acc , film) =>
  acc + (typeof film.score === "number" ?  film.score : 0), 0);
  let result = Number((totalScore / filteredFilms.length).toFixed(2));
  console.log("EXERCISE 6 ->", result);
  return result;
}

function hoursToMinutes(array) {
  return array.map(film => {
    if (!film.duration || typeof film.duration !== "string") {
       return {...film, duration : 0}; 
    }
  const parts = film.duration.split(" ");
  let hour = 0;
  let minute = 0;
  
  parts.forEach(part => {
    if(part.includes("h")) hour = parseInt(part);
    if(part.includes("min")) minute = parseInt(part);
  });
const totalMinutes = (hour * 60) + minute;
let result = {...film, duration : totalMinutes};

console.log("EXERCISE 7 ->",result );
return result;
  });
}

function bestFilmOfYear(array, year) {
  let filterByYear = array.filter(film => film.year === year);
  if(!filterByYear  || filterByYear.length === 0) return 0;
  let filmScore = filterByYear.reduce((actual, next) => actual.score > next.score ? actual : next);

  console.log ("EXERCISE 8 ->", filmScore);
  return [filmScore];  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
