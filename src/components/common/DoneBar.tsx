import React from "react";
import {
  useDeleteMutation,
  useToggleMutation,
} from "@/components/hooks/useMutation";

import type { Todo } from "@/types";

const DoneBar = ({ todos }: { todos: Todo[] }) => {
  const onClickCancelBtn = (payload: Todo) => {
    toggleMutation.mutate(payload);
  };

  const onClickDeleteBtn = (id: string) => {
    deleteMutation.mutate(id);
  };

  const toggleMutation = useToggleMutation();

  const deleteMutation = useDeleteMutation();
  const todosFilter = todos.filter((todo) => todo.isDone === true);
  return (
    <div className="mt-1 flex">
      {todosFilter.map((todo: Todo) => {
        const payload = {
          id: todo.id,
          title: todo.title,
          contents: todo.contents,
          isDone: todo.isDone,
        };

        return (
          <div
            className="mr-3 p-4 border-4 border-black rounded-lg"
            key={todo.id}
          >
            <li className="mb-1.5">제목:&nbsp;{todo.title}</li>
            <li>내용:&nbsp;{todo.contents}</li>
            <div className="flex">
              <button
                className="mr-1 bg-blue-400 hover:bg-blue-700 text-white font-bold py-0.9 px-6 border border-blue-700 rounded"
                onClick={() => onClickCancelBtn(payload)}
              >
                취소
              </button>
              <button
                className="bg-red-400 hover:bg-red-700 text-white font-bold py-0.9 px-3 border border-blue-700 rounded"
                onClick={() => onClickDeleteBtn(todo.id)}
              >
                삭제하기
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoneBar;
