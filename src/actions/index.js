import axios from 'axios'

import { FETCH_PHOTOS } from './types';

export function fetchPhotos() {
  const request = axios.get('https://jsonplaceholder.typicode.com/photos?albumId=41');
  console.log('fetchPhotos.request', request);

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
