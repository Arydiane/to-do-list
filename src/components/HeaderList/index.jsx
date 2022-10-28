import styles from './HeaderList.module.css'
import { ReactComponent as IconToDo } from './to-do-list.svg'

function HeaderList() {
    return ( 
        <header className={styles.header}>
            <IconToDo  className={styles.header__icon}/>
            <h1 className={styles.header__title}>TO DO LIST | Lista de Tarefas</h1>
        </header>
     );
}

export default HeaderList;