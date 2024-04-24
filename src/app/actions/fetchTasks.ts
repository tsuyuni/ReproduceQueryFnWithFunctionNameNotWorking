"use server";

const fetchTasks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ["task 1", "task 2", "task 3"];
};

export default fetchTasks;
