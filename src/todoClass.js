export class Todo {
    constructor({name = null, task = null, lastEdit = null }) {
        this.name = name !== null ? name : "New Todo";
        this.task = task !== null ? task : "";
        this.lastEdit = lastEdit !== null ? lastEdit : "NONE";
    }
  }
  