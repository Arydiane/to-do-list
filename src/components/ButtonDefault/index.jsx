import styles from './ButtonDefault.module.css'

function ButtonDefault({ children, click, isDefault = true}) {
    return ( 
        <button 
            className={ isDefault 
                ? styles.buttonDefault 
                : `${styles.buttonDefault} ${styles.buttonSecundary}`
            } 
            onClick={click}
        >
            {children}
        </button>
     );
}

export default ButtonDefault;