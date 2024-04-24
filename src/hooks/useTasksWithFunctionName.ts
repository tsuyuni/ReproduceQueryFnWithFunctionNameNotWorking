"use query";

import { useQuery } from "@tanstack/react-query";
import fetchTasks from "../actions/fetchTasks";

const useTasksWithFunctionName = () => {
  const { data } = useQuery({
    queryKey: ["tasks", "function-name"],
    queryFn: fetchTasks,
  });

  return { data };
};

export default useTasksWithFunctionName;
