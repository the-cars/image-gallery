<template>
    <li><!-- this is the Porsche, Ferrari... list item data that appears on /albums page -->
        <RouterLink :to="`/albums/${album.id}`">{{album.title}}</RouterLink>
    </li>
</template>

<script>
export default {
    props: {
        album: Object
    }
};
</script>

<style>
li {
    border: 2px solid steelblue;
}
</style>
