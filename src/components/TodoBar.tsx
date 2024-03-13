import React from "react";
import { Todo } from "@/app/types";
import { useComplete, useDelete } from "@/mutaion/mutation";

const TodoBar = ({ todos }: { todos: Todo[] }) => {
  const patchCompleteMutation = useComplete();
  const deleteMutation = useDelete();

  const onClickCompleteBtn = (id: string) => {
    patchCompleteMutation.mutate(id);
  };

  const onClickDeleteBtn = (id: string) => {
    deleteMutation.mutate(id);
  };

  return (
    <div>
      {todos.map((todo: Todo) => {
        if (!todo.isDone) {
          return (
            <ul key={todo.id}>
              <li>{todo.title}</li>
              <li>{todo.contents}</li>
              <button onClick={() => onClickCompleteBtn(todo.id)}>완료</button>
              <button
                className="my-3 border-2"
                onClick={() => onClickDeleteBtn(todo.id)}
              >
                삭제하기
              </button>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default TodoBar;
