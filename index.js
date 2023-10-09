const { pool } = require("./utils/db");
const { TodoRecord } = require("./records/todo.record");

(async () => {
  // const firstTodoItem = new TodoRecord({
  //   title: "zzzz",
  // });
  // const newId = await firstTodoItem.insert();
  // await firstTodoItem.insert();

  const foundTodo = await TodoRecord.find(
    "c7c477fe-a79a-4a60-81a5-daa726bef51e",
  );

  // foundTodo.title = "mmmmmmmmmmmmmmmmmmmmmm";
  await foundTodo.delete();

  await pool.end();
})();
