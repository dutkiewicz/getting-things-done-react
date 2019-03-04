import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import TaskList from './components/TaskList'

library.add(faPlus, faTrashAlt, faCheckCircle)


class App extends React.Component {
  state = {
    matrix: [
      {id: 0, title: 'Urgent & Important', color: "bg-danger", taskList: []},
      {id: 1, title: 'Urgent', color: "bg-warning", taskList: []},
      {id: 2, title: 'Important', color: "bg-success", taskList: []},
      {id: 3, title: 'Not urgent & Not important', color: "bg-default", taskList: []},
    ]
  }

  handleAddTask = (id, newTask) => {
    const tasks = this.state.matrix.slice()
    tasks.forEach(task => {
      if (task.id === id) {
        task.taskList.push(newTask)
      }
    })
    this.setState({tasks: tasks})
  }
  
  handleRemoveTask = (id, taskValue) => {
    const tasks = this.state.matrix.slice()
    tasks.forEach(task => {
      if (task.id === id) {
        let index = task.taskList.indexOf(taskValue)
        if (index > -1) {
          task.taskList.splice(index, 1)
        }
        
      }
    })
    this.setState({tasks: tasks})
  }

  componentDidUpdate() {
    let serialized = JSON.stringify(this.state.matrix)
    localStorage.setItem('store', serialized)
  }

  componentWillMount() {
    if (localStorage.getItem('store')) {
      this.setState({matrix: JSON.parse(localStorage.getItem('store'))})
    }
  }

  render() {

    const tasks = this.state.matrix;
    
    return (
      <main className="content boxed">
        <div className="row">
          {tasks.map(task => <TaskList 
            key={task.id}
            title={task.title} 
            id={task.id} 
            tasks={task.taskList} 
            onAddTask={this.handleAddTask}
            onRemoveTask={this.handleRemoveTask}
            headerColor={task.color} />)}
        </div>
      </main>
    );
  }
}

export default App;
