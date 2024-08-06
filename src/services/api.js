import axios from 'axios';

const API_URL = 'https://beta.sochcast.com/api/v1/listener/sochcast-originals';

export const fetchShows = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
