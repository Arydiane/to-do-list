import styles from './Task.module.css'
import { BiTrash } from 'react-icons/bi'

function Task({ task, handleOnChange, deleteTask }) {

    return (
        <div className={styles.task__container}>
            <div className={styles.task__text}>
                <input
                    type="checkbox"
                    id={`task-${task.id}`}
                    name={task.description}
                    value={task.isChecked}
                    checked={task.isChecked}
                    onChange={() => handleOnChange(task.id)}
                />
                <label
                    htmlFor={`task-${task.id}`}
                    className={task.isChecked ? styles.task__checked : ""}
                >
                    {task.description}
                </label>
            </div>
            <BiTrash
                className={styles.task__trash}
                size="1.5rem"
                color="var(--primary-color)"
                title='Excluir'
                onClick={() => deleteTask(task.id)}
            />
        </div>
    );
}

export default Task;