import http from 'k6/http';
// import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
};

// Below randomize the endpoints

export default () => {
  http.get('http://127.0.0.1:3000/qa/questions?product_id=1');
};
