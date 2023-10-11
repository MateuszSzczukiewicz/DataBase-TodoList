const { db, client } = require("./utils/db");
const { TodoRepository } = require("./repositories/todo.repository");
const { TodoRecord } = require("./records/todo.record");

(async () => {
  try {
    const todo = new TodoRecord({
      _id: "",
      title: "Skończyć projekt MongoDB",
    });
    await TodoRepository.insert(todo);
  } finally {
    await client.close();
  }
})();
