fetch('api/info')
  .then(response => response.json())
  .then(data => renderLists(data));

const imageBaseUrl = 'https://cdn-rorpage-01.azureedge.net/images';

function renderLists(data) {
  document.body.style.background = data.background_color;

  document.getElementById('title').innerHTML = `<h1>${data.title}</h1>`;
  document.getElementById('start-date').innerHTML = `Started ${data.start_date}`;

  const index = data.index;
  const movies = data.movies.all_movies;
  const skippedMovies = data.movies.skipped;

  renderUpNextMoviePoster(data.movies.up_next);

  const subtitle = '<div class="subtitle">{{release_date}} &#183; {{runtime}}</div>';

  Handlebars.registerPartial(
    'movie',
    '<li class="collection-item avatar">'
      + `<img src="${imageBaseUrl}{{src}}" alt="{{title}}" class="circle">`
      + '<span class="title {{#if is_skipped}}gray{{/if}}">{{title}}</span>'
      + subtitle
      + '</li>'
  );

  const itemListHtml = '<ul class="collection">'
    + '{{#each movies}}'
    + '{{>movie movie=.}}'
    + '{{else}}None!{{/each}}'
    + '</ul>';

  let watchedMovies = movies.slice(0, index);

  // Add not watched or skipped movies
  skippedMovies.forEach((movie) => {
    movie.is_skipped = true;
    movie.title = `${movie.title} [Skipped]`;

    watchedMovies.push(movie);
  });

  renderHtml(itemListHtml, 'watched-movies', { movies: watchedMovies });

  const upcomingMovies = movies.slice(index + 1);
  renderHtml(itemListHtml, 'upcoming-movies', { movies: upcomingMovies });
}

function renderUpNextMoviePoster(upNextMovie) {
  if (!upNextMovie) return;

  const element = document.getElementById('up-next-movie');
  const instance = document.importNode(element.content, true);

  const poster = instance.querySelector('.full-poster');
  poster.src = `${imageBaseUrl}${upNextMovie.src}`;
  poster.alt = upNextMovie.title;

  const subtitle = instance.querySelector('.subtitle');
  subtitle.innerHTML = `${upNextMovie.release_date} &#183; ${upNextMovie.runtime}`;

  const posterElement = document.getElementById('card-image');
  posterElement.appendChild(instance);
}

function renderHtml(template, id, item) {
  const compiledTemplate = Handlebars.compile(template);
  const html = compiledTemplate(item);

  document.getElementById(id).innerHTML = html;
}
