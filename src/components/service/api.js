import axios from 'axios';

// створюємо екземпляр класу axios, щоб не повторювати у всіх запитах однакові дані
// для цього використовуємо метод класу сreate
const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f0f166877cbfe2faaaf5ad4de4d845ef',
  },
});

// ----------------------------------Trend-----------------
export const APIgetTrandingMovies = async () => {
  const media_type = 'movie';
  const time_window = 'day';
  // тут через get витягуємо створені дані і дописуємо що потрібно для конкретного запиту
  const response = await moviesAPI.get(`trending/${media_type}/${time_window}`);
  const { data } = response;

  return data.results;
};

// ----------------------------------Search----------------------------
export const APIsearchMovies = async query => {
  // тут додаткого додаємо ще один аргумент-обʼєкт params, куди передаємо дані для рядка запиту
  const response = await moviesAPI.get('/search/movie', { params: { query } });
  const { data } = response;
  
  return data.results;
};

// -----------------------------------Details----------------------------
export const APImovieDetails = async movieId => {
  const response = await moviesAPI.get(`movie/${movieId}`);
  const { data } = response;

  return data;
};

// -----------------------------------Cast--------------------------------
export const APImovieDetailsCast = async movieId => {
  const response = await moviesAPI.get(`movie/${movieId}/credits`);
  const { data } = response;

  return data.cast;
};

// -----------------------------------Review-------------------------------
export const APImovieDetailsReviews = async movieId => {
  const response = await moviesAPI.get(`movie/${movieId}/reviews`);
  const { data } = response;

  return data.results;
};
