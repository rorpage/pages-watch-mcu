const imageBaseUrl = 'images';

Handlebars.registerPartial(
  'posterTile',
  '<li class="movie-tile group{{#if is_skipped}} movie-tile--skipped{{/if}}">'
  + `<a class="movie-tile-link" href="https://www.imdb.com/title/{{imdb_id}}" target="_blank" rel="noopener">`
  + '<div class="movie-tile-frame">'
  + `<img src="${imageBaseUrl}{{src}}" alt="{{title}}" loading="lazy" class="movie-tile-img" />`
  + '{{#if number}}<span class="movie-tile-badge">{{number}}</span>{{/if}}'
  + '{{#if is_skipped}}<span class="movie-tile-skipped-badge">Skipped</span>{{/if}}'
  + '</div>'
  + '<p class="movie-tile-title">{{title}}</p>'
  + '<p class="movie-tile-meta">{{release_date}} &#183; {{runtime}}</p>'
  + '</a>'
  + '</li>'
);

const posterGridHtml = '<ul class="movie-grid">'
  + '{{#each movies}}{{>posterTile .}}{{else}}<li class="text-white/70">None yet!</li>{{/each}}'
  + '</ul>';

const compiledPosterGrid = Handlebars.compile(posterGridHtml);

Handlebars.registerPartial(
  'movieRow',
  '<li class="movie-row">'
  + `<img src="${imageBaseUrl}{{src}}" alt="{{title}}" loading="lazy" class="movie-row-thumb" />`
  + '<span class="movie-row-body">'
  + '<span class="movie-row-title">{{title}}</span>'
  + '<span class="movie-row-meta">'
  + '{{release_date}} &#183; {{runtime}} &#183; '
  + '<a href="https://www.imdb.com/title/{{imdb_id}}" target="_blank" rel="noopener" class="movie-row-link">Info</a>'
  + '</span>'
  + '</span>'
  + '</li>'
);

const movieListHtml = '<ul class="movie-list">'
  + '{{#each movies}}{{>movieRow .}}{{else}}<li class="text-white/70">Nothing yet!</li>{{/each}}'
  + '</ul>';

const compiledMovieList = Handlebars.compile(movieListHtml);

fetch('api/info')
  .then(response => response.json())
  .then(data => renderLists(data));

function renderLists(data) {
  document.documentElement.style.setProperty('--brand', data.background_color);

  document.getElementById('title').innerHTML = `<h1 class="font-display text-5xl tracking-wide sm:text-6xl">${data.title}</h1>`;
  document.getElementById('start-date').innerHTML = `Started ${data.start_date}`;

  renderUpNextMoviePoster(data.movies.up_next);

  const index = data.index;
  const movies = data.movies.all_movies.map((movie, i) => ({ ...movie, number: i + 1 }));
  const watchedMovies = movies.slice(0, index);

  data.movies.skipped.forEach((movie) => {
    watchedMovies.push({ ...movie, is_skipped: true });
  });

  document.getElementById('watched-movies').innerHTML = compiledPosterGrid({ movies: watchedMovies });

  const upcomingMovies = movies.slice(index + 1);
  document.getElementById('upcoming-movies').innerHTML = compiledMovieList({ movies: upcomingMovies });
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
    `<a href="https://www.imdb.com/title/${upNextMovie.imdb_id}" target="_blank" rel="noopener" class="movie-row-link">Info</a>`;

  document.getElementById('card-image').appendChild(instance);
}
