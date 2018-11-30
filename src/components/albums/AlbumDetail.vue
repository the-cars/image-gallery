<template>
  <section v-if="album">
    <h2>{{album.id}}</h2>
    <p>
      <button @click="showModal = true">Add a new Image</button>
    </p>
    <div v-if="showModal" class="modal">
      <div class="content">

        <form @submit.prevent="handleAdd()">
          <label>
            <span>Title:</span>
            <input v-model="image.title" required>
          </label>

          <label>
            <span>Image Url:</span>
            <input v-model="image.urlImage" required>
          </label>
        
          <label>
            <span></span>
            <button type="submit">Add</button>
          </label>
        </form>

        <button @click="showModal = false">Close</button>
      </div>
    </div>
    <Thumbnails :images="album.images" class="thumbs"/>
  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import Thumbnails from './Thumbnails';

export default {
    data() {
        return {
            album: null,
            showModal: false,
            image: {}
        };
    },
    methods: {
        handleAdd() {
            this.album.images.push(this.image);
            this.showModal = false;
            this.image = {};
        }
    },
    components: {
        Thumbnails
    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.make);
    }
};
</script>

<style scoped>
div.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
}
div.content {
  background: white;
  padding: 40px;
}
</style>
