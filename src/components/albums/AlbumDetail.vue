<template>
  <section> I am the Album Detail 
    <h2>{{album.make}}</h2>
    <h3>Images</h3>
    <p>
      <button>To do later</button>
    </p>  
  </section>


</template>

<script>
import albumsApi from '../../services/albumsApi';

export default {
    created() {
        this.album = albumsApi.getAlbum(this.$route.params.id);
    }
};
</script>

<style>

</style>
