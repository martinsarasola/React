export const selectTasks = (state) => state.tasks.tasks;

export const selectCompletedTasks = (state) =>
  state.tasks.tasks.filter((task) => task.completed);

export const selectPendingTasks = (state) =>
  state.tasks.tasks.filter((task) => !task.completed);
