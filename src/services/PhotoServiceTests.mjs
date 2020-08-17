import { getPhotosInfo } from './PhotoService.mjs';

console.log('Retrieve photo data:');

let searchData = {
  searchText: 'moon',
  startDate: new Date(2020, 0, 1),
  endDate: new Date(2020, 8, 1),
  page: 1,
  pageSize: 50,
  sortDirection: 'ascending',
};
getPhotosInfo(searchData).then(data => console.log(data));
