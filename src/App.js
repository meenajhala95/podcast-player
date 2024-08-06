import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ShowList from './components/ShowList';
import EpisodeList from './components/EpisodeList';
import EpisodePlayer from './components/EpisodePlayer';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Podcast Player by Sochcast</h1>
        <ShowList />
        <EpisodeList />
        <EpisodePlayer />
      </div>
    </Provider>
  );
};

export default App;
