import albums from '../assets/data.js';

export default {
    getAlbums() {
        return albums;
    },
    getAlbum(id) {
        return albums.find(album => album.id === id);
    },
    add(album) {
        album.id = 'Blah';
        album.images = [];
        albums.push(album);
        return album;
    }
};