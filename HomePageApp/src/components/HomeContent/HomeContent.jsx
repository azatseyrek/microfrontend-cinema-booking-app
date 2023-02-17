import React, { useEffect, useState } from 'react';
import QuickBooking from '../QuickBooking/QuickBooking.jsx';
import './HomeContent.scss';

const MovieCard = React.lazy(() => import('components/MovieCard'));

const dummyItem = [{ name: 'Dummy Movie' }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Add the logic to load the movies from server and set to the state
    // fetch localhost:5555 and get the movies
    const response = fetch('http://localhost:5555/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  console.log('movies', movies);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === 'function') {
      props.movieClicked(item);
      console.log('clicked');
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <MovieCard title={item.name} imageUrl={item.imageUrl} />
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking />
      <div className="movies-container">
        <React.Suspense fallback={<div className="loading">Loading...</div>}>
          {renderMovieList()}
        </React.Suspense>
      </div>
    </div>
  );
};

export default HomeContent;
