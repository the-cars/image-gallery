<template>
    <li>
        <RouterLink :to="`/albums/${album.make}`">{{album.make}}</RouterLink>
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

</style>
