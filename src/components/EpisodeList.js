import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowList } from '../redux/showSlice'; 

const EpisodeList = ({ showId, setCurrentEpisode }) => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.shows.episodes[showId] || []);

  useEffect(() => {
    if (showId) {
      dispatch(fetchShowList(showId));
    }
  }, [dispatch, showId]);

  if (!episodes || episodes.length === 0) {
    return <div>No episodes available.</div>;
  }

  return (
    <div className="episode-list">
      {episodes.map((episode) => (
        <div 
          className="episode-item" 
          key={episode.id}
          onClick={() => setCurrentEpisode(episode)}
          style={{ cursor: 'pointer' }}
        >
          <img src={episode.image} alt={episode.title} />
          <h3>{episode.title}</h3>
          <button>Play</button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
