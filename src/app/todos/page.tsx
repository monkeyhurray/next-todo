"use client";
import React from "react";

import { useQueryClient, useQuery } from "@tanstack/react-query";

type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

const TodosPage = () => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_APP_URL}/todos`);
      const todos = await response.json();
      return todos;
    },
  });
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>오류 발생</div>;
  }
  return (
    <div>
      {todos.map((item: Todo) => {
        return (
          <ul key={item.id}>
            <li>{item.title}</li>
            <li>{item.contents}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodosPage;
