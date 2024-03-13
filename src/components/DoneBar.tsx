import React from "react";
import { Todo } from "@/app/types";
import { useCancel, useDelete } from "@/mutaion/mutation";

const DoneBar = ({ todos }: { todos: Todo[] }) => {
  const onClickCancelBtn = (id: string) => {
    patchCancelMutation.mutate(id);
  };

  const onClickDeleteBtn = (id: string) => {
    deleteMutation.mutate(id);
  };

  const patchCancelMutation = useCancel();

  const deleteMutation = useDelete();

  return (
    <>
      {todos.map((todo: Todo) => {
        if (todo.isDone) {
          return (
            <ul key={todo.id}>
              <li>{todo.title}</li>
              <li>{todo.contents}</li>
              <button onClick={() => onClickCancelBtn(todo.id)}>취소</button>
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
    </>
  );
};

export default DoneBar;
