import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Task from './Task'

class TaskList extends React.Component {

    state = {
        taskList: this.props.tasks,
        taskValue: ''
    }

    renderHeaderColor() {
        return "card-header " + this.props.headerColor;
    }

    handleChange = event => {
        this.setState({taskValue: event.target.value})
    }

    render() {
        const addTask = event => {
            event.preventDefault();
            this.props.onAddTask(this.props.id, this.state.taskValue); 
            this.setState({taskValue: ''})
        }

        return (
            <div className="col-md-6 col-sm-12 mb-3">
                <div className="card">
                    <h4 className={this.renderHeaderColor()}>{this.props.title}</h4>
                    
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {this.state.taskList.map((task, key) => <Task key={key} name={task} taskListId={this.props.id} onRemoveTask={this.props.onRemoveTask} />)}
                        </ul>
                        <form onSubmit={e => addTask(e)}>
                            <div className="form-row">
                                <div className="col-md-10 col-xs-12">
                                    <input type="text" className="form-control" name="task" value={this.state.taskValue} onChange={this.handleChange} />
                                </div>
                                <div className="col-md-2 col-xs-12">
                                    <button className="btn btn-outline-success form-control"><FontAwesomeIcon icon="plus" /> add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default TaskList;