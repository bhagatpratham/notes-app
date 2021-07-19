const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film Course",
      completed: false,
    },
  ],
  gettsakstodo() {
    const tasks2 = this.tasks.filter((task) => {
      return task.completed === false;
    });
    return tasks2;
  },
};

console.log(tasks.gettsakstodo());
