import Link from 'next/link'
import styles from './styles.module.css'

export const NavBar = ()=>{
    return (
        <header className={styles.headerWrapper}>
            <nav className={`${styles.navWrapper} flexContainer`}>
                <Link href='/'>
                    <img
                        src='/assets/images/krollo-logo.png'
                        alt='KROLLOSHOW'
                        className={styles.navLogo}
                    />
                </Link>
                <ul className={styles.navList}>
                    <li>
                        <Link href='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Tienda
                        </Link>
                    </li>
                </ul>
                <ul className={styles.navList}>
                    <li>
                        <Link href='/'>
                            Carrito
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}