<template>
    <footer class="footer">
        <small>copyright &copy; 2023</small>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {
        presYear: Number,
    },
};
</script>

<style scope>
.footer {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    align-items: center;
    color: white;
}

.footer a {
    color: white;
    font-size: small;
    font-variant: small-caps;
}
</style>
