import React, { Component } from "react";
class ListOfTasks extends Component {
  render() {
    const tasks = this.props.tasks;

    return (
      <div className="list-of-tasks content">
        <ol type="1">
          {Object.keys(tasks).map(key => (
            <li key={key}>{tasks[key].desc}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListOfTasks;
