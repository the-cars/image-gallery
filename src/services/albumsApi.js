import albums from '../assets/data.js';

export default {
    getAlbums() {
        return albums;
    },
    getAlbum(make) {
        return albums.find(album => album.make === make);
    }
};