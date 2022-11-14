import ButtonDefault from 'components/ButtonDefault';
import { useState } from 'react';
import styles from './NewTask.module.css'

function NewTask({addNewTask}) {

    const [newTask, setNewTask] = useState(() => { return '' })

    const onSubmitNewTask = (event) => {
        event.preventDefault();
        addNewTask( {
            description: newTask,
            isChecked: false
        } )
        setNewTask('')
    }

    return ( 
        <form className={styles.form__container} onSubmit={onSubmitNewTask}>
            <label className={styles.form__label} htmlFor="newTask">
                Digite a nova tarefa e clique em salvar
            </label>
            <input 
                id="newTask"
                className={styles.form__input}
                type="text"
                placeholder="Digite aqui ..."
                maxLength={250}
                minLength={3}
                pattern="([A-Za-zÀ-ü0-9]{1,}\s*)+"
                title="Uma nova tarefa deve conter apenas letras e números sendo no mínimo 3 e no máximo 250 caracteres."
                required={true}
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
            />
            <ButtonDefault isDefault={false}>
                Salvar
            </ButtonDefault> 
        </form>
     );
}

export default NewTask;