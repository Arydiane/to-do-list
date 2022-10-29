import styles from './ButtonDefault.module.css'

function ButtonDefault({ children}) {
    return ( 
        <button className={styles.buttonDefault}>
            {children}
        </button>
     );
}

export default ButtonDefault;