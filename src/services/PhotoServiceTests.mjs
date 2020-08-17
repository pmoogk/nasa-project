import { getPhotosInfo } from './PhotoService.mjs';

console.log( "Retrieve photo data:");

getPhotosInfo().then( data => console.log( data.length ) );