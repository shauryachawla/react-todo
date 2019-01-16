import React, { Component } from "react";

class AddTaskForm extends Component {
  new_task = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const task = {
      desc: this.new_task.current.value
    };
    this.props.addTask(task);
    e.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="new-task"
          type="text"
          ref={this.new_task}
          placeholder="new task"
        />
        <button type="submit">Add new task</button>
      </form>
    );
  }
}

export default AddTaskForm;
