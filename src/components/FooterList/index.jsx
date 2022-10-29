import {AiFillGithub, AiFillLinkedin, AiTwotoneMail} from 'react-icons/ai'
import styles from './FooterList.module.css'

function FooterList() {
    return ( 
        <footer className={styles.footer__container}>
            <ul className={styles.footer__list}>
                <li>
                    <a href="https://github.com/Arydiane" target="_blank" rel="noreferrer">
                        <AiFillGithub 
                            className={styles.footer__icon}
                            size="1.5rem"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arydiane-jardim/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin 
                            className={styles.footer__icon} 
                            size="1.5rem"
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:arydianejardim@gmail.com"  target="_blank" rel="noreferrer">
                        <AiTwotoneMail 
                            className={styles.footer__icon}
                             size="1.5rem"
                        />
                    </a>
                </li>
            </ul>
            <p className={styles.footer__text}>Desenvolvido por Arydiane Jardim</p>
        </footer>
     );
}

export default FooterList;