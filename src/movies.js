// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    let uniqueDirectors = [];
  
    movies.forEach((movie) => {
      if (!uniqueDirectors.includes(movie.director)) {
        uniqueDirectors.push(movie.director);
      }
    });
  
    // Return the array of unique directors
    return uniqueDirectors;
  }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (!movies) return 0;
  
    const stevenDrama = movies.filter(movie => 
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  
    return stevenDrama.length;
  }
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) return 0;
  
    let score = movies.reduce((accumulator, actualValue) => {
      if (actualValue.score) {
        return accumulator + actualValue.score;
      } else {
        return accumulator;
      }
    }, 0);
  
    let average = (score / movies.length).toFixed(2);
  
    return Number(average);
  }
  
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (movies.length === 0) return 0;
    let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
   
    return scoresAverage(dramaMovies);
  }
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesInner = movies.map((movie) => movie);
    moviesInner.sort((movieA, movieB) => {
      if (movieA.year > movieB.year) return movieA.year - movieB.year;
      if (movieA.year < movieB.year) return movieA.year - movieB.year;
      else return movieA.title.localeCompare(movieB.title);
    });
  
    return moviesInner;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return movies
      .map((movie) => movie.title)
      .sort()
      .slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map((movie) => {
      const durationParts = movie.duration.split(" ");
  
      let totalMinutes = 0;
  
      durationParts.forEach((part) => {
        if (part.includes("h")) {
          totalMinutes += parseInt(part) * 60;
        } else if (part.includes("min")) {
          totalMinutes += parseInt(part);
        }
      });
  
      return {
        ...movie,
        duration: totalMinutes,
      };
    });
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
    
    const moviesByYear = {};
  
    moviesArray.forEach((movie) => {
      const { year } = movie;
      if (!moviesByYear[year]) {
        moviesByYear[year] = [];
      }
      moviesByYear[year].push(movie);
    });
  
    const averageScores = Object.entries(moviesByYear).map(([year, movies]) => {
      const totalScores = movies.reduce((sum, movie) => sum + movie.score, 0);
      const averageScore = totalScores / movies.length;
      return { year, averageScore };
    });
  
    averageScores.sort((a, b) => b.averageScore - a.averageScore || a.year - b.year);
  
    return `The best year was ${averageScores[0].year} with an average score of ${averageScores[0].averageScore}`;
}

  