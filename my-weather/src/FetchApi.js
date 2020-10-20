import axios from 'axios';
            const API_KEY = "a7a8cb7bb5e54639e5clafe80aec45a8";


 export const FetchApi = async (query) => {
  const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${query}`, {
    
  });

  return data;
};
