import axios from "axios";
import { Todo } from "@/app/types";
const getTodo = async (): Promise<Todo[]> => {
  const response = await axios.get(`http://localhost:4000/todos`);
  return response.data;
};

const postTodo = async (newTodo: {
  title: string;
  contents: string;
}): Promise<void> => {
  await axios.post(`http://localhost:4000/todos`, {
    ...newTodo,
    isDone: false,
  });
};
const patchCancelTodo = async (id: string): Promise<void> => {
  await axios.patch(`http://localhost:4000/todos/${id}`, {
    isDone: false,
  });
};

const patchCompleteTodo = async (id: string): Promise<void> => {
  await axios.patch(`http://localhost:4000/todos/${id}`, {
    isDone: true,
  });
};

const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`http://localhost:4000/todos/${id}`);
};

export { getTodo, postTodo, patchCompleteTodo, patchCancelTodo, deleteTodo };
