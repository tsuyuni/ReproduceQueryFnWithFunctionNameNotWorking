"use client";

import useTasksWithAnonymousArrowFunction from "../hooks/useTasksWithAnonymousArrowFunction";
import useTasksWithFunctionName from "../hooks/useTasksWithFunctionName";

export default function Home() {
  const { data: tasksWithFunctionName } = useTasksWithFunctionName();
  const { data: tasksWithAnonymousArrowFunction } =
    useTasksWithAnonymousArrowFunction();

  return (
    <div>
      <h2>Tasks with function name</h2>
      {tasksWithFunctionName?.map((task) => {
        return <p>{task}</p>;
      })}
      <h2>Tasks with anonymous arrow function</h2>
      {tasksWithAnonymousArrowFunction?.map((task) => {
        return <p>{task}</p>;
      })}
    </div>
  );
}
