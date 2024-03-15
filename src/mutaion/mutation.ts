import { queryKey } from "@/queryKey/queryKey";
import {
  deleteTodo,
  patchCancelTodo,
  patchCompleteTodo,
} from "@/todoApi/todosApi";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const useComplete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchCompleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};

const useCancel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchCancelTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};
export { useComplete, useDelete, useCancel };
