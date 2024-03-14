import { queryClient } from "@/app/provider";
import { queryKey } from "@/queryKey/queryKey";
import {
  deleteTodo,
  patchCancelTodo,
  patchCompleteTodo,
} from "@/todoApi/todosApi";

import { useMutation } from "@tanstack/react-query";

const useComplete = () => {
  return useMutation({
    mutationFn: patchCompleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};

const useDelete = () => {
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};
const useCancel = () => {
  return useMutation({
    mutationFn: patchCancelTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};
export { useComplete, useDelete, useCancel };
