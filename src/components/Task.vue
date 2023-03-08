<template>
    <div
        @dblclick="$emit('toggleReminder', task.id)"
        :class="[task.reminder ? 'reminder' : '', 'tasks']">
        <div class="task-text">{{ task.text }}</div>
        <div class="day">{{ task.day }}</div>
        <i @click="$emit('deleteTask', task.id)" class="fas fa-times"></i>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: Object,
    },
    emits: ["deleteTask", "toggleReminder"],
};
</script>

<style>
.tasks {
    padding: 10px 15px;
    color: black;
    background-color: white;
    position: relative;
}

.tasks .fas {
    position: absolute;
    right: 13px;
    top: 20%;
    cursor: pointer;
    font-weight: 600;
    font-size: large;
}

.task-text {
    font-size: 14px;
    font-weight: 600;
}

.day {
    font-size: 12px;
    margin-top: 5px;
}

.tasks.reminder::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1px;
    width: 8px;
    height: 100%;
    background-color: black;
    box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.5);
}
</style>
