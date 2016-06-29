var xhr1 = new XMLHttpRequest,
  xhr2 = new XMLHttpRequest,
  xhr3 = new XMLHttpRequest,
  xhr4 = new XMLHttpRequest,
  xhr5 = new XMLHttpRequest,
  movies = []

xhr1.open('GET', 'https://api.themoviedb.org/3/movie/278?api_key=65ad599d712aebb6773a915463584100')
xhr2.open('GET', 'https://api.themoviedb.org/3/movie/550?api_key=65ad599d712aebb6773a915463584100')
xhr3.open('GET', 'https://api.themoviedb.org/3/movie/155?api_key=65ad599d712aebb6773a915463584100')
xhr4.open('GET', 'https://api.themoviedb.org/3/movie/118340?api_key=65ad599d712aebb6773a915463584100')
xhr5.open('GET', 'https://api.themoviedb.org/3/movie/680?api_key=65ad599d712aebb6773a915463584100')

xhr1.addEventListener('load', function(){
  var movie = JSON.parse(this.responseText)
  movies.push(movie)
  sortMovies()
})

xhr2.addEventListener('load', function(){
  var movie = JSON.parse(this.responseText)
  movies.push(movie)
  sortMovies()
})

xhr3.addEventListener('load', function(){
  var movie = JSON.parse(this.responseText)
  movies.push(movie)
  sortMovies()
})

xhr4.addEventListener('load', function(){
  var movie = JSON.parse(this.responseText)
  movies.push(movie)
  sortMovies()
})

xhr5.addEventListener('load', function(){
  var movie = JSON.parse(this.responseText)
  movies.push(movie)
  sortMovies()
})

xhr1.send()
xhr2.send()
xhr3.send()
xhr4.send()
xhr5.send()

function sortMovies(){
  movies.sort(function(a, b) {
    var titleA = a.title.toUpperCase()
    var titleB = b.title.toUpperCase()

    if (titleA < titleB) {
      return -1
    }

    if (titleA > titleB) {
      return 1
    }

    return 0
  })

  if (movies.length >= 5) {
    console.log(movies)
    var sortedMovies = JSON.stringify(movies)
    console.log(sortedMovies)
  }
}
