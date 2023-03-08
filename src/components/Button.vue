<template>
    <button
        @click="onClick()"
        :style="{ backgroundColor: color }"
        class="add-task btn">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: String,
    },

    methods: {
        onClick() {
            this.$emit("toggleAddTask");
        },
    },
};
</script>

<style scope>
.add-task {
    min-width: 130px;
    color: black;
    font-weight: bold;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
}

.add-task:active {
    font-size: 12.9px;
}
</style>
