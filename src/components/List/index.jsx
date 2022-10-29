import ButtonDefault from 'components/ButtonDefault';
import { useState } from 'react';
import Task from '../Task';
import styles from './List.module.css'

function List() {

    //initial tasks
    const tasks = [
        {
            id: 1,
            description: "Caminhar na praia",
            isChecked: false
        },
        {
            id: 2,
            description: "Estudar sobre programação",
            isChecked: true
        },
        {
            id: 3,
            description: "Fazer curso de inglês",
            isChecked: false
        },
        {
            id: 4,
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
                <ButtonDefault>
                    + Nova Tarefa
                </ButtonDefault>
            </section>
            <section>

            </section>
        </>


    );
}

export default List;