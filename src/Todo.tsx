import { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
//   // オプションのpropsの場合は?をつける
// };

export const Todo = (
  // props:Omit<TodoType,"id">
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
