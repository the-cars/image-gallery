<template>
  <section v-if="album">
    <h2>{{album.make}}</h2>
    <h3>Images</h3>
    {{album}}
    <p>
      <button>To do later</button>
    </p>  
  </section>


</template>

<script>
import albumsApi from '../../services/albumsApi';

export default {
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.make);
    }
};
</script>

<style>

</style>
