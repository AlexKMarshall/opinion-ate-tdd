import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/reKAyRzDG16BpHPiKn88fpRkRsX3OZan',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
