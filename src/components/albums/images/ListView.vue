<template>
    <section>
    <h3>List View</h3>
        <p>There are {{images.length}} image(s)</p>
    <!-- <ul>
        <li v-for="(image, index) in images"
            :key="index">
        <h4>{{image.title}}</h4>
        <img :src="image.urlImage">
        </li>
    </ul> -->
</section>
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
