<template>
    <div class="container">
        <div class="box">
            <div class="header">
                <Header text="Task Tracker" />
                <Button
                    v-show="homePage"
                    @toggleAddTask="toggleAddTask"
                    :text="showAddTask ? 'Close' : 'Add Task'"
                    color="white" />
            </div>

            <router-view :showAddTask="showAddTask"></router-view>
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Button,
        Footer,
    },
    computed: {
        homePage() {
            if (this.$route.path === "/") {
                return true;
            } else {
                return false;
            }
        },
    },
    data() {
        return {
            showAddTask: false,
        };
    },

    methods: {
        toggleAddTask() {
            this.showAddTask = !this.showAddTask;
        },
    },
};
</script>

<style scope>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&family=Poppins:wght@100;200;300;400&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

html {
    --s: 150px;
    --c1: #1d1d1d;
    --c2: black;
    --c3: black;
}

*::selection {
    background-color: transparent;
}

body {
    width: 100vw;
    height: 100vh;
    background: repeating-conic-gradient(
                from 30deg,
                #0000 0deg 120deg,
                var(--c3) 0 180deg
            )
            calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
        repeating-conic-gradient(
            from 30deg,
            var(--c1) 0 60deg,
            var(--c2) 0 120deg,
            var(--c3) 0 180deg
        );
    background-size: var(--s) calc(var(--s) * 0.577);
    overflow-x: hidden;
}

.container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.box {
    width: 370px;
    min-height: 450px;
    background-color: transparent;
    box-shadow: inset 0px 0px 7px rgba(255, 255, 255, 0.5);
    margin-top: 40px;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
