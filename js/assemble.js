const imageBaseUrl = 'images';

function posterTileHtml(movie) {
  return '<li class="movie-tile group' + (movie.is_skipped ? ' movie-tile--skipped' : '') + '">'
    + `<a class="movie-tile-link" href="https://www.imdb.com/title/${movie.external_ids.imdb_id}" target="_blank" rel="noopener">`
    + '<div class="movie-tile-frame">'
    + `<img src="${imageBaseUrl}${movie.src}" alt="${movie.title}" loading="lazy" class="movie-tile-img" />`
    + (movie.number ? `<span class="movie-tile-badge">${movie.number}</span>` : '')
    + (movie.is_skipped ? '<span class="movie-tile-skipped-badge">Skipped</span>' : '')
    + '</div>'
    + `<p class="movie-tile-title">${movie.title}</p>`
    + `<p class="movie-tile-meta">${movie.release_date} &#183; ${movie.runtime}</p>`
    + '</a>'
    + '</li>';
}

function posterGridHtml(movies) {
  if (!movies.length) return '<p class="text-white/70">None yet!</p>';
  return `<ul class="movie-grid">${movies.map(posterTileHtml).join('')}</ul>`;
}

function movieRowHtml(movie) {
  return '<li class="movie-row">'
    + '<span class="movie-row-thumb-wrap">'
    + `<img src="${imageBaseUrl}${movie.src}" alt="${movie.title}" loading="lazy" class="movie-row-thumb" />`
    + (movie.number ? `<span class="movie-row-badge">${movie.number}</span>` : '')
    + '</span>'
    + '<span class="movie-row-body">'
    + `<span class="movie-row-title">${movie.title}</span>`
    + '<span class="movie-row-meta">'
    + `${movie.release_date} &#183; ${movie.runtime} &#183; `
    + `<a href="https://www.imdb.com/title/${movie.external_ids.imdb_id}" target="_blank" rel="noopener" class="movie-row-link">Info</a>`
    + '</span>'
    + '</span>'
    + '</li>';
}

function movieListHtml(movies) {
  if (!movies.length) return '<p class="text-white/70">Nothing yet!</p>';
  return `<ul class="movie-list">${movies.map(movieRowHtml).join('')}</ul>`;
}

fetch('api/info')
  .then(response => response.json())
  .then(data => renderLists(data));

function renderLists(data) {
  document.documentElement.style.setProperty('--brand', data.background_color);

  document.getElementById('title').innerHTML = `<h1 class="font-display text-7xl tracking-wide sm:text-8xl md:text-9xl">${data.title}</h1>`;
  document.getElementById('start-date').innerHTML = `Started ${data.start_date}`;

  renderUpNextMoviePoster(data.movies.up_next);

  const index = data.index;
  const movies = data.movies.all_movies.map((movie, i) => ({ ...movie, number: i + 1 }));
  const watchedMovies = movies.slice(0, index);

  data.movies.skipped.forEach((movie) => {
    watchedMovies.push({ ...movie, is_skipped: true });
  });

  document.getElementById('watched-movies').innerHTML = posterGridHtml(watchedMovies);

  const upcomingMovies = movies.slice(index + 1);
  document.getElementById('upcoming-movies').innerHTML = movieListHtml(upcomingMovies);
}

function renderUpNextMoviePoster(upNextMovie) {
  if (!upNextMovie) return;

  const element = document.getElementById('up-next-movie');
  const instance = document.importNode(element.content, true);

  const poster = instance.querySelector('.full-poster');
  poster.src = `${imageBaseUrl}${upNextMovie.src}`;
  poster.alt = upNextMovie.title;

  const caption = instance.querySelector('.hero-card-caption');
  caption.innerHTML = `${upNextMovie.release_date} &#183; ` +
    `${upNextMovie.runtime} &#183; ` +
    `<a href="https://www.imdb.com/title/${upNextMovie.external_ids.imdb_id}" target="_blank" rel="noopener" class="movie-row-link">Info</a>`;

  document.getElementById('card-image').appendChild(instance);
}
