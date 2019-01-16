import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import ListOfTasks from "./ListOfTasks";
import base from "../base";

class App extends Component {
  componentDidMount() {
    this.ref = base.syncState(`tasks`, {
      context: this,
      state: "tasks"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addTask = task => {
    var tasks = { ...this.state.tasks };
    tasks[`task${Date.now()}`] = task;
    this.setState({ tasks: tasks });
  };

  state = {
    tasks: {}
  };
  render() {
    return (
      <div className="App">
        <h2>oyoy</h2>
        <AddTaskForm addTask={this.addTask} />
        <ListOfTasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
