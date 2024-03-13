import { queryClient } from "@/app/provider";
import {
  deleteTodo,
  patchCancelTodo,
  patchCompleteTodo,
} from "@/todoApi/todosApi";
import { useMutation } from "@tanstack/react-query";

const useComplete = () => {
  return useMutation({
    mutationFn: patchCompleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
};

const useDelete = () => {
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
};
const useCancel = () => {
  return useMutation({
    mutationFn: patchCancelTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
};
export { useComplete, useDelete, useCancel };
