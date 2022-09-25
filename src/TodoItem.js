import React from "react";
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function TodoItem(props){

    const trash = <FontAwesomeIcon icon={faTrash} />
    const check = <FontAwesomeIcon icon={faCircleCheck} />

    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>{check}√</span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>{trash}X</span>            
        </li>
    )
}

export {TodoItem}