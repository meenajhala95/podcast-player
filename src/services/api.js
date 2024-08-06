import axios from 'axios';

const API_URL = 'https://beta.sochcast.com/api/v1/listener/sochcast-originals';

export const fetchShows = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Fetched Shows Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};
