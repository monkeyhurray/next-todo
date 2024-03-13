import axios from "axios";
import { Todo } from "@/app/types";
const getTodo = async (): Promise<Todo[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos`
  );
  return response.data;
};

const postTodo = async (newTodo: {
  title: string;
  contents: string;
}): Promise<void> => {
  await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`, {
    ...newTodo,
    isDone: false,
  });
};
const patchCancelTodo = async (id: string): Promise<void> => {
  await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`, {
    isDone: false,
  });
};

const patchCompleteTodo = async (id: string): Promise<void> => {
  await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`, {
    isDone: true,
  });
};

const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`);
};

export { getTodo, postTodo, patchCompleteTodo, patchCancelTodo, deleteTodo };
