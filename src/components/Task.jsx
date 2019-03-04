import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = function(props) {
    return (
        <li className="list-group-item">
        <div className="row">
            <div className="col">{props.name}</div>
            <div className="col text-right">
                <div className="btn-group">
                    <button className="btn btn-outline-success" onClick={() => props.onRemoveTask(props.taskListId, props.name)}>
                        <FontAwesomeIcon icon="check-circle"/>
                    </button>
                    <button className="btn btn-outline-danger" onClick={() => props.onRemoveTask(props.taskListId, props.name)}>
                        <FontAwesomeIcon icon="trash-alt"/>
                    </button>
                </div>
            </div>
        </div>
        </li>
    )
}

export default Task;