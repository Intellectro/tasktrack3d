<template>
    <div>
        <form @submit="onSubmit" class="add-form">
            <div class="form-control">
                <label for="text">Task</label>
                <input
                    v-model="text"
                    type="text"
                    name="text"
                    placeholder="Add Task" />
            </div>

            <div class="form-control">
                <label for="day-time">Day & Time</label>
                <input
                    v-model="day"
                    type="text"
                    name="day"
                    placeholder="Add Day & Time" />
            </div>

            <div class="form-row">
                <label for="reminder">Set Reminder</label>
                <input v-model="reminder" type="checkbox" name="reminder" />
            </div>

            <input type="submit" value="Save Task" class="btn-save" />
        </form>
        <div class="alert-msg">
            <span class="msg">Please enter a valid name</span>
        </div>
    </div>
</template>

<script>
function setError(element) {
    element.style.display = "flex";
    setTimeout(() => {
        element.style.display = "none";
    }, 1000);
}
export default {
    name: "AddTask",
    data() {
        return {
            text: "",
            day: "",
            reminder: false,
        };
    },

    methods: {
        onSubmit(e) {
            e.preventDefault();

            if (!this.text) {
                setError(document.querySelector(".alert-msg"));
                return;
            }

            const newTask = {
                id: Date.now(),
                text: this.text,
                day: this.day,
                reminder: this.reminder,
            };

            this.$emit("add-task", newTask);

            this.text = "";
            this.day = "";
            this.reminder = false;
        },
    },
};
</script>

<style>
.add-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 17px;
}

.form-control {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
}

.form-control input {
    padding: 10px;
}

.form-row {
    display: flex;
    column-gap: 14px;
    color: white;
}

.form-row label {
    font-size: 13px;
    font-weight: bold;
}

input[type="checkbox"] {
    accent-color: black;
}

.form-control label {
    color: white;
    font-size: 13px;
    font-weight: bold;
}

.btn-save {
    padding: 10px;
    background: transparent;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow: inset 0px 0px 5px rgba(255, 255, 255, 0.5);
    border-radius: 7px;
}

.alert-msg {
    position: fixed;
    width: 350px;
    height: 130px;
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    backdrop-filter: blur(15px);
    display: none;
}

.msg {
    font-size: 17px;
    letter-spacing: 1.1px;
    color: white;
}
</style>
