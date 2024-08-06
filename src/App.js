import React, { useState } from 'react';
import "./App.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ShowList from './components/ShowList';
import EpisodeList from './components/EpisodeList';
import EpisodePlayer from './components/EpisodePlayer';

const App = () => {
  const [selectedShowId, setSelectedShowId] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const handleShowClick = (showId) => {
    setSelectedShowId(showId);
    setCurrentEpisode(null); // Clear current episode when a new show is selected
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Podcast Player by Sochcast</h1>
        <ShowList onShowClick={handleShowClick} />
        {selectedShowId && <EpisodeList showId={selectedShowId} setCurrentEpisode={setCurrentEpisode} />}
        {currentEpisode && <EpisodePlayer episode={currentEpisode} setCurrentEpisode={setCurrentEpisode} />}
      </div>
    </Provider>
  );
};

export default App;
