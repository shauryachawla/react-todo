import React, { Component } from "react";
class ListOfTasks extends Component {
  handleChange = key => {
    this.props.removeTask(key)
  }
  render() {
    const tasks = this.props.tasks;

    return (
      <div className="list-of-tasks content">
        <ol type="1">
          {Object.keys(tasks).map(key => (
            <li key={key} id={key}>{tasks[key].desc}<a onClick={() => { this.handleChange(key) }} className="delete is-pulled-right"></a></li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListOfTasks;
