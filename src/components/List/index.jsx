import styles from './List.module.css'; 
import ButtonDefault from 'components/ButtonDefault';
import NewTask from 'components/NewTask';
import { useState, useEffect } from 'react';
import Task from '../Task';
import { v4 as uuidv4 } from 'uuid';

function List() {

    const [viewForm, setViewForm] = useState(() => { return false })
    const [tasksList, setTasksList] = useState([])

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
    //load local storage
    useEffect(() => {
        if (localStorage.getItem('to-do-list') !== null){
            setTasksList(JSON.parse(localStorage.getItem('to-do-list')))
        }
    }, [])

    //salve local Storage
    useEffect(() => {
        localStorage.setItem('to-do-list', JSON.stringify(tasksList))
    }, [tasksList])


    return (
        <main>
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
        </main>


    );
}

export default List;