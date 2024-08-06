import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowList } from '../redux/showSlice';
import EpisodeList from './EpisodeList';

const ShowList = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows.list);
  const [selectedShowId, setSelectedShowId] = React.useState(null);

  useEffect(() => {
    dispatch(fetchShowList());
  }, [dispatch]);

  useEffect(() => {
    console.log('Shows:', shows); 
  }, [shows]);

  if (!shows || shows.length === 0) {
    return <div>No shows available.</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Podcast Player by Sochcast</h1>
      </div>
      <div className="show-list">
        {shows.map((show) => (
          <div className="show-item" key={show.id} onClick={() => setSelectedShowId(show.id)}>
            <img src={show.show_image} alt={show.name} />
            <h2>{show.name}</h2>
          </div>
        ))}
      </div>
      {selectedShowId && <EpisodeList showId={selectedShowId} />}
    </div>
  );
};

export default ShowList;
