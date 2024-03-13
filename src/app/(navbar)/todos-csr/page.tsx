"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  getTodo,
  postTodo,
  patchCancelTodo,
  deleteTodo,
} from "@/todoApi/todosApi";
import TodoBar from "@/components/TodoBar";
import DoneBar from "@/components/DoneBar";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const CSRPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: todos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
    initialData: [],
  });

  const postMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const patchCancelMutation = useMutation({
    mutationFn: patchCancelTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const onClickWriteBtn = () => {
    setTitle("");
    setContent("");
    postMutation.mutate({
      title,
      contents,
    });
  };

  const onClickCancelBtn = (id: string) => {
    patchCancelMutation.mutate(id);
  };

  const onClickDeleteBtn = (id: string) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (isError) {
    return <div>오류 발생</div>;
  }

  return (
    <>
      &nbsp;
      <input
        placeholder="제목을 입력하세요"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      &nbsp;
      <input
        placeholder="내용을 입력하세요"
        type="text"
        value={contents}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="my-3 border-2" onClick={onClickWriteBtn}>
        완료
      </button>
      <button
        className="my-3 border-2"
        onClick={() => {
          router.push("/report");
        }}
      >
        [할일정보통계보러가기]
      </button>
      <h1>Todos...</h1>
      <TodoBar todos={todos} />
      <h1>Done</h1>
      <DoneBar todos={todos} />
    </>
  );
};

export default CSRPage;
