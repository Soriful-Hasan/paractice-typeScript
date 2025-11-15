type User = {
  id: number;
  name: string;
  age: number;
  address: string;
};

const obj: User = { id: 4 };

/*
 */

const obj2: Required<User> = {
  id: 4,
  name: "hasan",
  age: 44,
  address: "dhaka",
};

const parObj: Partial<User> = { id: 44, name: "hasan" };

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

type OmitType = Omit<User, "name" | "id">;
