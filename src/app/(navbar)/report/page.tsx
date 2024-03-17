import type { Todo } from "@/types";

const ReportISRPage = async () => {
  const fetchTodos = await fetch(`${process.env.NEXT_SERVER_URL}/todos`, {
    next: {
      revalidate: 10,
    },
  });
  const todos = await fetchTodos.json();

  const Done = todos.filter((item: Todo) => item.isDone === true);
  const Todo = todos.filter((item: Todo) => item.isDone === false);

  return (
    <div className="flex flex-col items-center">
      현재까지 {todos.length}개의 todolist가 등록되었습니다. - 현재까지{" "}
      {Done.length}개의 완료 리스트, {Todo.length}개의 할일 리스트가 존재합니다.
    </div>
  );
};

export default ReportISRPage;
