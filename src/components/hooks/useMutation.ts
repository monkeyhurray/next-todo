import { queryKey } from "@/queryKey/queryKey";
import { deleteTodo, patchTodo, postTodo } from "@/todoApi/todosApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] }),
  });
};

const useToggleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] }),
  });
};

const useDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKey.todos],
      }),
  });
};

export { usePostMutation, useDeleteMutation, useToggleMutation };
