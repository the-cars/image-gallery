<template>
    <ul><!-- this is the Porsche, Ferrari... list item container that appears on /albums page -->
        <Album v-for="album in albums"
            :key="album.id"
            :album="album"/>
    </ul>
</template>

<script>
import Album from './Album';

export default {
    props: {
        albums: Array
    },
    components: {
        Album
    }
};
</script>

<style>
ul {
    list-style: none;
    padding-left: 0;
    background: lightgrey;
    font-size: 20px;
}
</style>
