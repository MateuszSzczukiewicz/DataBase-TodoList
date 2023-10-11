const { todos } = require("../utils/db");
const { ObjectId } = require("mongodb");

class TodoRecord {
  constructor(obj) {
    this._id = obj._id;
    this.title = obj.title;

    this._validate();
  }

  _validate() {
    if (this.title.trim() < 5) {
      throw new Error("Todo title should be at least 5 characters.");
    }

    if (this.title.length > 150) {
      throw new Error("Todo title should be at least 150 characters.");
    }
  }

  async insert() {
    const { insertedId } = await todos.insertOne({
      _id: this._id,
      title: String(this.title),
    });
    this._id = insertedId;

    return insertedId;
  }

  async delete() {
    await todos.deleteOne({ _id: this._id });
  }

  static async find(id) {
    const item = await todos.findOne({ _id: ObjectId(String(id)) });
    return item === null ? null : new TodoRecord(item);
  }

  static async findAll() {
    const result = await todos.find();
    const resultArray = await result.toArray();

    return resultArray.map((obj) => new TodoRecord(obj));
  }

  static async findAllWithCursor() {
    return todos.find();
  }

  async update() {
    await todos.replaceOne(
      {
        _id: this._id,
      },
      {
        title: String(this.title),
      },
    );
  }
}

module.exports = {
  TodoRecord,
};
