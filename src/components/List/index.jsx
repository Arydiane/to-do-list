import styles from './List.module.css'; 
import ButtonDefault from 'components/ButtonDefault';
import NewTask from 'components/NewTask';
import { useState } from 'react';
import Task from '../Task';
import { v4 as uuidv4 } from 'uuid';

function List() {

    const [viewForm, setViewForm] = useState(false)

    //initial tasks
    const tasks = [
        {
            id: uuidv4(),
            description: "Caminhar na praia",
            isChecked: false
        },
        {
            id: uuidv4(),
            description: "Estudar sobre programação",
            isChecked: true
        },
        {
            id: uuidv4(),
            description: "Fazer curso de inglês",
            isChecked: false
        },
        {
            id: uuidv4(),
            description: "Praticar algoritmos",
            isChecked: true
        }
    ]

    const [tasksList, setTasksList] = useState(tasks)

    const handleOnChange = (id) => {
        setTasksList(tasksList.map(task => {
            if (task.id === id) {
                task.isChecked = !task.isChecked
            }
            return task
        }))
    }

    const deleteTask = (id) => {
        setTasksList([...tasksList.filter(task => {
            return task.id !== id
        })])
    }

    function addNewTask(newTask) {
        setTasksList( [...tasksList, {id: uuidv4(), ...newTask,}])
        setViewForm(!viewForm)
    }


    return (
        <>
            <section className={styles.list__container}>
                <ul className={styles.list}>

                    {tasksList.map((task) => {
                        return (
                            <li key={task.id} className={styles.list__item}>
                                <Task
                                    task={task}
                                    value={task.isChecked}
                                    handleOnChange={handleOnChange}
                                    deleteTask={deleteTask}
                                />
                            </li>
                        )
                    })}
                </ul>
                <ButtonDefault click={()=> setViewForm(!viewForm)}>
                    + Nova Tarefa
                </ButtonDefault>
            </section>
            <section 
                className={ viewForm 
                ? `${styles.list__container} ${styles.viewForm__active}`
                : `${styles.list__container} ${styles.viewForm__inactive}` }
            >
                <NewTask addNewTask={addNewTask}/>
            </section>
        </>


    );
}

export default List;