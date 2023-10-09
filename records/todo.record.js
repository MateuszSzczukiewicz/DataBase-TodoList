class TodoRecord {
  constructor(obj) {
    this.title = obj.title;
    this.id = obj.id;

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
}

module.exports = {
  TodoRecord,
};
