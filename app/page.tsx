"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 3)));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl rounded-lg bg-white p-10 dark:bg-zinc-900">
        <h1 className="mb-6 text-3xl font-semibold text-black dark:text-white">
          Todo List
        </h1>

        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
            >
              <h2 className="font-medium text-black dark:text-white">
                {todo.title}
              </h2>

              <p className="text-sm text-zinc-500">
                {todo.completed ? "Completed" : "Pending"}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}