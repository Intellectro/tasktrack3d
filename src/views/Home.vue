<template>
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <div class="contents">
        <Tasks
            @toggleReminder="toggleReminder"
            @deleteTask="deleteTask"
            :tasks="tasks" />
    </div>
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
    name: "Home",
    props: {
        showAddTask: Boolean,
    },
    data() {
        return {
            tasks: [],
            async fetchTasks() {
                const res = await fetch("http://localhost:5000/tasks/");
                const data = await res.json();
                return data;
            },
            async fetchTask(id) {
                const res = await fetch(`http://localhost:5000/tasks/${id}`);
                const data = await res.json();
                return data;
            },
        };
    },
    async created() {
        this.tasks = await this.fetchTasks();
    },
    methods: {
        async addTask(task) {
            const res = await fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(task),
            });
            const data = await res.json();
            this.tasks = [...this.tasks, data];
        },
        async deleteTask(id) {
            if (confirm("Are you sure you want to delete this task?")) {
                const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                    method: "DELETE",
                });
                res.status === 200
                    ? (this.tasks = this.tasks.filter((task) => task.id !== id))
                    : alert("Error deleting task");
            }
        },
        async toggleReminder(id) {
            const taskToggle = await this.fetchTask(id);
            const updTask = { ...taskToggle, reminder: !taskToggle.reminder };

            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(updTask),
            });

            const data = await res.json();

            this.tasks = this.tasks.map((task) =>
                task.id == id ? { ...task, reminder: data.reminder } : task
            );
        },
    },

    components: {
        Tasks,
        AddTask,
    },
};
</script>
