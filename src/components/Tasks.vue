<template>
    <div class="mar-task">
        <div v-for="task in tasks" :key="task.id">
            <Task
                @toggleReminder="$emit('toggleReminder', task.id)"
                @deleteTask="$emit('deleteTask', task.id)"
                :task="task" />
        </div>
    </div>
</template>

<script>
import Task from "./Task.vue";
export default {
    name: "Tasks",
    props: {
        tasks: Array,
    },
    components: {
        Task,
    },
    emits: ["deleteTask", "toggleReminder"],
};
</script>

<style>
.mar-task {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 14px;
}
</style>
