// import axios
import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9655420495e4b0b1eac0b79b79df4d967290af1e93ced986d470e8b00839c8d5'
      }
});