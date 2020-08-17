// This code below provides the services to fetch the photo data.
import fetch from 'node-fetch';

const API_KEY = process.env.REACT_APP_API_KEY;
const USER_ID = process.env.REACT_APP_USER_ID;

const allUrl =
  'https://api.flickr.com/services/rest/?' +
  'method=flickr.people.getPublicPhotos&' +
  `api_key=${API_KEY}&user_id=${USER_ID}&` +
  'format=json&nojsoncallback=1&' +
  'extras=date_taken,description,url_l,url_o';

const searchUrl =
  'https://api.flickr.com/services/rest/?' +
  'method=flickr.photos.search&' +
  `api_key=${API_KEY}&user_id=${USER_ID}&` +
  'format=json&nojsoncallback=1&' +
  'extras=date_taken,description,url_l,url_o';

export async function getPhotosInfo({
  searchText,
  startDate,
  endDate,
  page,
  pageSize,
  sortDirection,
}) {
  let searchAll = searchText === '' && startDate === null && endDate === null;
  let url = searchAll ? allUrl : searchUrl;

  // Add the page and pageSize to the url
  url = `${url}&page=${page}&per_page=${pageSize}`;

  if (searchText !== '') {
    url = `${url}&text=${encodeURI(searchText)}`;
  }

  if (startDate !== null) {
    let sortOrder =
      sortDirection === 'ascending' ? 'date-taken-asc' : 'date-taken-desc';

    url = `${url}&min_taken_date=${getDateString(startDate)}&sort=${sortOrder}`;
  }

  if (endDate !== null) {
    url = `${url}&max_taken_date=${getDateString(endDate)}`;
  }

  // Get the first page which will contain the total number of pages that we
  // need to get
  let pageResult = await getPhotoInfo(url);

  return pageResult;
}

async function getPhotoInfo(url) {
  let result = { error: false, photos: [] };

  try {
    let response = await fetch(url);
    let data = await response.json();

    result.total = parseInt(data.photos.total);

    // Grab the data we want out of the json.
    data.photos.photo.forEach(photo => {
      // If the large photo exists we will use that one.  Otherwise, we will use the original.
      let largeUrl = photo.url_l ? photo.url_l : photo.url_o;

      result.photos.push({
        id: photo.id,
        title: photo.title,
        datetaken: photo.datetaken,
        url: largeUrl,
        description: photo.description,
      });
    });
  } catch (exc) {
    console.log('Exception:' + exc);
    result.error = true;
  }

  return result;
}

const getDateString = date => {
  let dateString = date.toISOString();
  let lastDotIndex = dateString.lastIndexOf('.');

  dateString = dateString.replace('T', ' ');

  if (lastDotIndex !== -1) {
    dateString = dateString.substring(0, lastDotIndex);
  }

  return encodeURI(dateString);
};
