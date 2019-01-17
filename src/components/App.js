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
        <section className="section">
          <div className="container">
            <div className="columns ">
              <div className="column" />
              <div className="column has-background-light">
                <div className="heading has-text-centered">
                  <h1 className="title">Todo App</h1>
                </div>
                <br />
                <AddTaskForm addTask={this.addTask} />
                <ListOfTasks tasks={this.state.tasks} />
              </div>
              <div className="column" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
