import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css"
import { ChangeEvent, useState } from "react"

interface TaskItem{
    id:number;
    checked: boolean;
    description: string;
}

interface TaskItemProps
{
    task: TaskItem;
    onDeleteTask: (id:number) => void;
    onTaskDone: (id:number, isDone:boolean)=> void;
}

export function TaskItem({task, onDeleteTask, onTaskDone}:TaskItemProps) {

    const [content, setContent] = useState(task);

    function handleOnDeleteTask()
    {
        onDeleteTask(content.id);
    }

    function handleTaskDone(event:ChangeEvent<HTMLInputElement>)
    {
        const taskDone = {...content, checked: event.target.checked};
        setContent(taskDone);
        onTaskDone(taskDone.id, taskDone.checked);        
    }

    return (
        <li className={styles.taskItem}>
            <input onChange={handleTaskDone} type="checkbox" checked={content.checked} />
            <div className={styles.taskDescription}>
                <p>{content.description}</p>
            </div>
            <button 
                onClick={handleOnDeleteTask} 
                title="Deletar Tarefa">
                <Trash className={styles.trash} size={22}/>
            </button>
        </li>
    )
}