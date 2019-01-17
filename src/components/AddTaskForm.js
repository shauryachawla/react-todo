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
      <form className="has-text-centered" onSubmit={this.handleSubmit}>
        <input
          className="input has-text-centered is-info"
          name="new-task"
          type="text"
          ref={this.new_task}
          placeholder="new task"
        />
        <br />
        <br />

        <button className="button is-rounded has-text-centered" type="submit">
          Add new task
        </button>
      </form>
    );
  }
}

export default AddTaskForm;
