import albums from '../assets/data.js';
import shortid from 'shortid';

export default {
    getAlbums() {
        return albums;
    },
    getAlbum(id) {
        return albums.find(album => album.id === id);
    },
    add(album) {
        album.id = shortid.generate();
        album.images = [];
        albums.push(album);
        return album;
    }
};