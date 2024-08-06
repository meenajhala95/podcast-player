import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentEpisode } from '../redux/showSlice';

const EpisodeList = ({ showId }) => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.shows.episodes.filter((episode) => episode.showId === showId));

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.id}>
          <img src={episode.image} alt={episode.title} />
          <h3>{episode.title}</h3>
          <button onClick={() => dispatch(setCurrentEpisode(episode))}>Play</button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
