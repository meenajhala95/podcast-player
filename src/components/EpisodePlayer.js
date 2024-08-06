import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentEpisode } from '../redux/showSlice';

const EpisodePlayer = () => {
  const dispatch = useDispatch();
  const currentEpisode = useSelector((state) => state.shows.currentEpisode);
  const episodes = useSelector((state) => state.shows.episodes);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && currentEpisode) {
      audioRef.current.src = currentEpisode.audio;
      audioRef.current.play();
    }
  }, [currentEpisode]);

  const handleEnded = () => {
    const currentIndex = episodes.findIndex((episode) => episode.id === currentEpisode.id);
    const nextEpisode = episodes[currentIndex + 1];

    if (nextEpisode) {
      dispatch(setCurrentEpisode(nextEpisode));
    }
  };

  const handleNext = () => {
    const currentIndex = episodes.findIndex((episode) => episode.id === currentEpisode.id);
    const nextEpisode = episodes[currentIndex + 1];

    if (nextEpisode) {
      dispatch(setCurrentEpisode(nextEpisode));
    }
  };

  return (
    <div>
      {currentEpisode && (
        <>
          <h4>Now Playing: {currentEpisode.title}</h4>
          <audio ref={audioRef} controls onEnded={handleEnded}>
            <source src={currentEpisode.audio} type="audio/mpeg" />
          </audio>
          <button onClick={handleNext}>Next Episode</button>
        </>
      )}
    </div>
  );
};

export default EpisodePlayer;