import albums from '../assets/data.js';

export default {
    getAlbums() {
        return albums;
    },
    getAlbum(id) {
        return albums.find(album => album.id === id);
    }
};