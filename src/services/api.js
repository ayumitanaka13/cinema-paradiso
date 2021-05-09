import axios from "axios";
const OMDB_URL = "https://www.omdbapi.com/";
const OMDB_API_KEY = "f7d4dc30";

const client = axios.create({
  baseURL: OMDB_URL,
  params: {
    apikey: OMDB_API_KEY,
  },
});

export default client;
