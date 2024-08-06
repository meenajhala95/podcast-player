import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentEpisode } from '../redux/showSlice';

const EpisodePlayer = () => {
  const dispatch = useDispatch();
  const currentEpisode = useSelector((state) => state.shows.currentEpisode);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && currentEpisode) {
      audioRef.current.src = currentEpisode.audio;
      audioRef.current.play();
    }
  }, [currentEpisode]);

  const handleEnded = () => {
    // Implement logic to play the next episode
  };

  return (
    <div>
      {currentEpisode && (
        <>
          <h4>Now Playing: {currentEpisode.title}</h4>
          <audio ref={audioRef} controls onEnded={handleEnded}>
            <source src={currentEpisode.audio} type="audio/mpeg" />
          </audio>
        </>
      )}
    </div>
  );
};

export default EpisodePlayer;
