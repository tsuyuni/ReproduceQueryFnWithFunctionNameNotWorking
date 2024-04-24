"use query";

import { useQuery } from "@tanstack/react-query";
import fetchTasks from "../actions/fetchTasks";

const useTasksWithAnonymousArrowFunction = () => {
  const { data } = useQuery({
    queryKey: ["tasks", "anonymous-arrow-function"],
    queryFn: () => fetchTasks(),
  });

  return { data };
};

export default useTasksWithAnonymousArrowFunction;
