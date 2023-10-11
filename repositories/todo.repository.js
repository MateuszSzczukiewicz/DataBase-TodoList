const { TodoRecord } = require("../records/todo.record");
const { todos } = require("../utils/db");
const { ObjectId } = require("mongodb");

class TodoRepository {
  static _checkRecord(record) {
    if (!(record instanceof TodoRecord)) {
      throw new Error("Record must be an instance of TodoRecord.");
    }
  }

  static async insert(record) {
    TodoRepository._checkRecord(record);

    const { insertedId } = await todos.insertOne(record);
    record._id = insertedId;

    return insertedId;
  }

  static async delete(record) {
    TodoRepository._checkRecord(record);

    await todos.deleteOne({ _id: record._id });
  }

  static async find(id) {
    const item = await todos.findOne({ _id: ObjectId(String(id)) });
    return item === null ? null : new TodoRecord(item);
  }

  static async findAll() {
    return (await todos.find()).toArray();
  }

  static async update(record) {
    TodoRepository._checkRecord(record);

    await todos.replaceOne(
      {
        _id: record._id,
      },
      {
        title: String(record.title),
      },
    );
  }
}

module.exports = {
  TodoRepository,
};
