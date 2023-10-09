const { pool } = require("./utils/db");
const { TodoRepository } = require("./repositories/todo.repository");

(async () => {
  const foundTodo = await TodoRepository.find(
    "c7c477fe-a79a-4a60-81a5-daa726bef51e",
  );
  foundTodo.title = "Sialalalala";
  await TodoRepository.update(foundTodo);

  console.log(await TodoRepository.findAll());

  await pool.end();
})();
