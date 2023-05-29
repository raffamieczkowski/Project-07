function getPosterLink(movie) {
  if (movie.poster_path == null) {
    return `https://img.freepik.com/darmowe-zdjecie/kolaz-w-tle-filmu_23-2149876032.jpg?w=740&t=st=1685302200~exp=1685302800~hmac=8c53b6db3490cd10fa6f9535b417ac3d7181839ed50758564abb2784f02a1611`;
  } else {
    return `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  }
}

export { getPosterLink };
