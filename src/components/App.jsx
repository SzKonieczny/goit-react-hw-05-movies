import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() =>
  import('../pages/home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Movies = lazy(() =>
  import('../pages/movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../pages/movieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('./cast/Cast').then(module => ({ ...module, default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:Id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} position="top-left" theme="colored" />
    </div>
  );
};
