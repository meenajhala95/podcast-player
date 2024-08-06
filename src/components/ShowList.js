import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowList } from '../redux/showSlice';

const ShowList = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows.list);

  useEffect(() => {
    dispatch(fetchShowList());
  }, [dispatch]);

  return (
    <div>
      {shows.map((show) => (
        <div key={show.id}>
          <img src={show.image} alt={show.title} />
          <h2>{show.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
