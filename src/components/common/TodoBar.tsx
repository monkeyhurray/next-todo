import React from "react";
import { Todo } from "@/app/types";
import { useComplete, useDelete } from "@/components/mutaion/useMutation";

const TodoBar = ({ todos }: { todos: Todo[] }) => {
  const patchCompleteMutation = useComplete();
  const deleteMutation = useDelete();

  const onClickCompleteBtn = (id: string) => {
    patchCompleteMutation.mutate(id);
  };

  const onClickDeleteBtn = (id: string) => {
    deleteMutation.mutate(id);
  };
  const todosFilter = todos.filter((todo) => todo.isDone === false);
  return (
    <div className="mt-1 flex">
      {todosFilter.map((todo: Todo) => {
        return (
          <div
            className="mr-3 p-4 border-4 border-black rounded-lg"
            key={todo.id}
          >
            <li className="mb-1.5">제목:&nbsp;{todo.title}</li>
            <li>내용:&nbsp;{todo.contents}</li>
            <button
              className="mr-1 bg-green-400 hover:bg-green-700 text-white font-bold py-0.9 px-6 border border-grey-700 rounded"
              onClick={() => onClickCompleteBtn(todo.id)}
            >
              완료
            </button>
            <button
              className="bg-red-400 hover:bg-red-700 text-white font-bold py-0.9 px-3 border border-blue-700 rounded"
              onClick={() => onClickDeleteBtn(todo.id)}
            >
              삭제하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoBar;
