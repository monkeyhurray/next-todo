import React from "react";
import NavBarSsr from "@/components/NavBarSsr";
import { Todo } from "@/app/types";
const SSRPage = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`);
  const data = await response.json();
  return (
    <div>
      <NavBarSsr />
      {data.map((todo: Todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.contents}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default SSRPage;
