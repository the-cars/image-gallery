<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>{{album.description}}</h3>
    <p>
      <button @click="showModal = true">Add a new Image</button>
    </p>
    <Modal :show="showModal" :onClose="() => showModal = false">
      <AddImage :onAdd="handleImageAdd()"/>
    </Modal>
    <nav>
      <RouterLink to="./thumbnail">Thumbnail</RouterLink>
      <RouterLink to="./list">List</RouterLink>
      <RouterLink to="./gallery">Gallery</RouterLink>
    </nav>
    <RouterView :images="album.images">DEFAULT VIEW</RouterView>
  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import Modal from '../shared/Modal';
import AddImage from './images/AddImage';

export default {
    data() {
        return {
            album: null,
            showModal: false,
            image: {}
        };
    },
    // methods: {
    //     handleAdd() {
    //         this.album.images.push(this.image);
    //         this.showModal = false;
    //         this.image = {};
    //     }
    // },
    components: {
        Modal,
        AddImage
    },
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.make);
    },
    methods: {
        handleImageAdd(image) {
            console.log('AddImage hosted in Modal says', image);
        }
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
  z-index: 2;
}
div.content {
  background: white;
  padding: 40px;
}

form {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
   
  }
  button {
    border: 2px solid black;
    border-radius: 10px;
    margin: 10px;
    font-size: 0.75em;
    background-color:rgba(175, 22, 22, 0.851);
    color: lightsteelblue;
  }
  span {
    display: inline-block;
  }
  input {
    width: 200px;
    height: 20px;
  }
  label {
    display: flex;
    padding-right: 7px;
    font-size: 1.1em;
    font-weight: 500;
  }
</style>
