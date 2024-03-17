import React from "react";
import NavBarSsr from "@/components/common/NavBarSsr";
import { Todo } from "@/app/types";
const SSRPage = async () => {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`);
  const data = await response.json();

  return (
    <div className="ml-7">
      <NavBarSsr />
      <h1 className="text-lg">전체 목록</h1>
      {data.map((todo: Todo) => {
        return (
          <div
            className="w-52 mr-3 mb-5 p-4 border-4 border-black rounded-lg"
            key={todo.id}
          >
            <li>제목:&nbsp;{todo.title}</li>
            <li>내용:&nbsp;{todo.contents}</li>
          </div>
        );
      })}
    </div>
  );
};

export default SSRPage;
