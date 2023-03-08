<template>
    <div class="title">{{ text }}</div>
</template>

<script>
export default {
    name: "Header",
    props: {
        text: String,
    },
};
</script>

<style scope>
.title {
    font-size: 22px;
    color: white;
    font-weight: bold;
}
</style>
