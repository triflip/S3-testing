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

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
