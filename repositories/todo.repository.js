const { TodoRecord } = require("../records/todo.record");

class TodoRepository {
  static _checkRecord(record) {
    if (!(record instanceof TodoRecord)) {
      throw new Error("Record must be an instance of TodoRecord.");
    }
  }

  static async insert(record) {
    TodoRepository._checkRecord(record);
  }

  static async delete(record) {
    TodoRepository._checkRecord(record);
  }

  static async find(id) {}

  static async findAll() {}

  static async update(record) {}
}

module.exports = {
  TodoRepository,
};
