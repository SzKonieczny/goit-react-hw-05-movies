import { HomeList } from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import fetchTrending from 'components/apiTools/Api';
// import { TrendingTitle } from './home.styled';

export const Home = () => {
  const [trendFilms, setTrendFilms] = useState();

  useEffect(() => {
    try {
      const films = fetchTrending();

      films.then(data => {
        return setTrendFilms(data);
      });
    } catch (error) {
      toast.error({ error });
    }
  }, []);

  return (
    <main>
      {/* <TrendingTitle>Trending Today</TrendingTitle> */}
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};
