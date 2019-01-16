import React, { Component } from "react";
class ListOfTasks extends Component {
  render() {
    const tasks = this.props.tasks;

    return (
      <div className="list-of-tasks">
        <ul>
          {Object.keys(tasks).map(key => (
            <li key={key}>{tasks[key].desc}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListOfTasks;
