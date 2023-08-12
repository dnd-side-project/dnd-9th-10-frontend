import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    Authorization:
      "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYmUwNWEwOS05N2IzLTQ0ZWUtODI3ZC1jYWFmOWJkZjBjMzYiLCJyb2xlIjoiZ3Vlc3QiLCJpc3MiOiJiYm9rIiwiaWF0IjoxNjkxODczNjYwLCJleHAiOjE2OTE5NjAwNjB9.SwuKRJbap75K9ZsmH20vAoswZbd9j_YgFa7zMKc3ZA8"
  },
});
