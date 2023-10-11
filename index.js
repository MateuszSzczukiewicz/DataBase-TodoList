const { client } = require("./utils/db");
const { TodoRecord } = require("./records/todo.record");

(async () => {
  try {
    for await (const todo of await TodoRecord.findAllWithCursor()) {
      const record = new TodoRecord(todo);
      record.title += " [updated]";
    }
  } finally {
    await client.close();
  }
})();
