const movies = [
  {
    rating: 'PG-13',
    release_date: 'July 22, 2011',
    runtime: '2h 4m',
    src: 'captain_america_the_first_avenger.jpg',
    title: 'Captain America: The First Avenger'
  },
  {
    rating: 'PG-13',
    release_date: 'March 8, 2019',
    runtime: '2h 3m',
    src: 'captain_marvel.jpg',
    title: 'Captain Marvel'
  },
  {
    rating: 'PG-13',
    release_date: 'May 2, 2008',
    runtime: '2h 6m',
    src: 'iron_man.jpg',
    title: 'Iron Man'
  },
  {
    rating: 'PG-13',
    release_date: 'May 7, 2010',
    runtime: '2h 4m',
    src: 'iron_man_2.jpg',
    title: 'Iron Man 2'
  },
  {
    rating: 'PG-13',
    release_date: 'May 6, 2011',
    runtime: '1h 55m',
    src: 'thor.jpg',
    title: 'Thor'
  },
  {
    rating: 'PG-13',
    release_date: 'May 4, 2012',
    runtime: '2h 23m',
    src: 'avengers.jpg',
    title: 'Avengers'
  },
  {
    rating: 'PG-13',
    release_date: 'November 8, 2013',
    runtime: '1h 52m',
    src: 'thor_the_dark_world.jpg',
    title: 'Thor: The Dark World'
  },
  {
    rating: 'PG-13',
    release_date: 'May 3, 2013',
    runtime: '2h 10m',
    src: 'iron_man_3.jpg',
    title: 'Iron Man 3'
  },
  {
    rating: 'PG-13',
    release_date: 'April 4, 2014',
    runtime: '2h 16m',
    src: 'captain_america_the_winter_soldier.jpg',
    title: 'Captain America: The Winter Soldier'
  },
  {
    rating: 'PG-13',
    release_date: 'August 1, 2014',
    runtime: '2h 1m',
    src: 'guardians_of_the_galaxy.jpg',
    title: 'Guardians of the Galaxy'
  },
  {
    rating: 'PG-13',
    release_date: 'May 5, 2017',
    runtime: '2h 16m',
    src: 'guardians_of_the_galaxy_2.jpg',
    title: 'Guardians of the Galaxy Vol. 2'
  },
  {
    rating: 'PG-13',
    release_date: 'May 1, 2015',
    runtime: '2h 21m',
    src: 'avengers_age_of_ultron.jpg',
    title: 'Avengers: Age of Ultron'
  },
  {
    rating: 'PG-13',
    release_date: 'July 17, 2015',
    runtime: '1h 57m',
    src: 'ant-man.jpg',
    title: 'Ant-Man'
  },
  {
    rating: 'PG-13',
    release_date: 'May 6, 2016',
    runtime: '2h 27m',
    src: 'captain_america_civil_war.jpg',
    title: 'Captain America: Civil War'
  },
  {
    rating: 'PG-13',
    release_date: 'February 16, 2018',
    runtime: '2h 14m',
    src: 'black_panther.jpg',
    title: 'Black Panther'
  },
  {
    rating: 'PG-13',
    release_date: 'July 7, 2017',
    runtime: '2h 13m',
    src: 'spider-man_homecoming.jpg',
    title: 'Spider-Man: Homecoming'
  },
  {
    rating: 'PG-13',
    release_date: 'July 9, 2021',
    runtime: '2h 14m',
    src: 'black_widow.jpg',
    title: 'Black Widow'
  },
  {
    rating: 'PG-13',
    release_date: 'November 4, 2016',
    runtime: '1h 55m',
    src: 'doctor_strange.jpg',
    title: 'Doctor Strange'
  },
  {
    rating: 'PG-13',
    release_date: 'November 3, 2017',
    runtime: '2h 10m',
    src: 'thor_ragnarok.jpg',
    title: 'Thor: Ragnarok'
  },
  {
    rating: 'PG-13',
    release_date: 'July 6, 2018',
    runtime: '1h 58m',
    src: 'ant-man_and_the_wasp.jpg',
    title: 'Ant-Man and the Wasp'
  },
  {
    rating: 'PG-13',
    release_date: 'April 27, 2018',
    runtime: '2h 29m',
    src: 'avengers_infinity_war.jpg',
    title: 'Avengers: Infinity War'
  },
  {
    rating: 'PG-13',
    release_date: 'April 26, 2019',
    runtime: '3h 1m',
    src: 'avengers_endgame.jpg',
    title: 'Avengers: Endgame'
  },
  {
    rating: 'PG-13',
    release_date: 'July 2, 2019',
    runtime: '2h 9m',
    src: 'spiderman_far_from_home.jpg',
    title: 'Spider-Man: Far from Home'
  },
  {
    rating: 'PG-13',
    release_date: 'December 17, 2021',
    runtime: '2h 28m',
    src: 'spiderman_no_way_home.jpg',
    title: 'Spider-Man: No Way Home'
  },
  {
    rating: 'PG-13',
    release_date: 'September 3, 2021',
    runtime: '2h 12m',
    src: 'shang_chi.jpg',
    title: 'Shang-Chi and the Legend of the Ten Rings'
  },
  {
    rating: 'PG-13',
    release_date: 'November 11, 2022',
    runtime: '2h 41m',
    src: 'black_panther_wakanda_forever.jpg',
    title: 'Black Panther: Wakanda Forever'
  },
  {
    rating: 'PG-13',
    release_date: 'May 5, 2023',
    runtime: '2h 29m',
    src: 'guardians_of_the_galaxy_3.jpg',
    title: 'Guardians of the Galaxy Vol. 3'
  }
];

const skippedMovies = [
  {
    rating: 'PG-13',
    release_date: 'November 5, 2021',
    runtime: '2h 36m',
    src: 'eternals.jpg',
    title: 'Eternals'
  },
  {
    rating: 'PG-13',
    release_date: 'May 6, 2022',
    runtime: '2h 6m',
    src: 'doctor_strange_in_the_multiverse_of_madness.jpg',
    title: 'Doctor Strange in the Multiverse of Madness'
  },
  {
    rating: 'PG-13',
    release_date: 'June 23, 2022',
    runtime: '1h 58m',
    src: 'thor_love_and_thunder.jpg',
    title: 'Thor: Love and Thunder'
  },
  {
    rating: 'PG-13',
    release_date: 'February 17, 2023',
    runtime: '2h 5m',
    src: 'ant_man_and_the_wasp_quantumania.jpg',
    title: 'Ant-Man and The Wasp: Quantumania'
  }
];

fetch('api/info')
  .then(response => response.json())
  .then(data => renderLists(data));

const imageBaseUrl = 'https://cdn-rorpage-01.azureedge.net/images/mcu/';

function renderLists(data) {
  document.body.style.background = data.background_color;

  document.getElementById('start-date').innerHTML = `Started ${data.start_date}`;

  const index = data.index;

  if (index < movies.length) {
    renderUpNextMoviePoster(index);
  }

  const subtitle = '<div class="gray">{{release_date}} &#183; {{runtime}}</div>';

  Handlebars.registerPartial(
    'movie',
    '<li class="collection-item avatar">'
      + `<img src="${imageBaseUrl}{{src}}" alt="{{title}}" class="circle">`
      + '<span class="title">{{title}}</span>'
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
    movie.title = `${movie.title} [Skipped]`;

    watchedMovies.push(movie);
  });

  renderHtml(itemListHtml, 'watched-movies', { movies: watchedMovies });

  const upcomingMovies = movies.slice(index + 1);
  renderHtml(itemListHtml, 'upcoming-movies', { movies: upcomingMovies });
}

function renderUpNextMoviePoster(index) {
  const upNextMovie = movies[index];

  const element = document.getElementById('up-next-movie');
  const instance = document.importNode(element.content, true);

  const poster = instance.querySelector('.full-poster');
  poster.src = `${imageBaseUrl}${upNextMovie.src}`;
  poster.alt = upNextMovie.title;

  const subtitle = instance.querySelector('.gray');
  subtitle.innerHTML = `${upNextMovie.release_date} &#183; ${upNextMovie.runtime}`;

  const posterElement = document.getElementById('card-image');
  posterElement.appendChild(instance);
}

function renderHtml(template, id, item) {
  const compiledTemplate = Handlebars.compile(template);
  const html = compiledTemplate(item);

  document.getElementById(id).innerHTML = html;
}
