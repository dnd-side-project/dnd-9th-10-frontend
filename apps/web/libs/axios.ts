import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzN2FmNmYzYi02YjA2LTQxZDAtOTMwOS1iNGZjM2U5Y2U2OTQiLCJyb2xlIjoiZ3Vlc3QiLCJpc3MiOiJiYm9rIiwiaWF0IjoxNjkxODE5MTQzLCJleHAiOjE2OTE5MDU1NDN9.X4ApyYZWmiGN0MihCJaDQ3sth6RsMNdAh8IOFycezfs",
  },
});
