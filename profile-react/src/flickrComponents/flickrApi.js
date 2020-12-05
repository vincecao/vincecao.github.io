import axios from 'axios';
import { defaultImageList } from '../const';
const API_KEY = process.env.REACT_APP_API_KEY;
const USER_ID = process.env.REACT_APP_USER_ID;
const PHOTOSETS_ID = process.env.REACT_APP_PHOTOSETS_ID;

export const getPublicPhotosPromise = () =>
  new Promise((resolve, reject) =>
    axios
      .get('https://www.flickr.com/services/rest/', {
        params: {
          method: 'flickr.people.getPublicPhotos',
          api_key: API_KEY,
          user_id: USER_ID,
          format: 'json',
          nojsoncallback: 1,
        },
      })
      .then((response) => {
        // console.log({ getPublicPhotosPromise: response });
        return response.data;
      })
      .then((imgs) => {
        if (imgs.photos.photo) {
          let res = imgs.data.photos.photo.map(
            (photo) =>
              'https://farm' +
              photo.farm +
              '.staticflickr.com/' +
              photo.server +
              '/' +
              photo.id +
              '_' +
              photo.secret +
              '_b.jpg'
          );

          resolve({
            status: 'success',
            msg: 'getPublicPhotosPromise',
            data: res,
          });
        } else {
          console.log('no photo find');
          reject();
        }
      })
      .catch((err) => {
        console.error(err);
        reject();
      })
  );

export const getPhotoSetsPromise = () =>
  new Promise((resolve, reject) =>
    axios
      .get('https://www.flickr.com/services/rest/', {
        params: {
          method: 'flickr.photosets.getPhotos',
          api_key: API_KEY,
          user_id: USER_ID,
          photoset_id: PHOTOSETS_ID,
          extras: 'url_h',
          format: 'json',
          nojsoncallback: 1,
        },
      })
      .then((response) => {
        // console.log({ getPhotosets: response });
        return response.data;
      })
      .then((imgs) => {
        if (imgs.photoset.photo) {
          let res = imgs.data.photoset.photo.map((photo) => photo.url_h);
          resolve({
            status: 'success',
            msg: 'getPhotoSetsPromise',
            data: res,
          });
        } else {
          reject({
            status: 'error',
            msg: 'getPhotoSetsPromise Error: no photo find',
          });
        }
      })
      .catch((error) => {
        console.log(error);
        resolve({
          status: 'success',
          msg: 'error, use backup',
          data: defaultImageList,
        });
      })
  );

export default {
  getPublicPhotosPromise,
  getPhotoSetsPromise,
};
