<template>
    <ul>
        <li v-for="(image, index) in images"
            :key="index">
        <h4>{{image.title}}</h4>
        <img :src="image.urlImage">
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        images: Array
    }
};
</script>

<style>

</style>
