import styles from './styles.module.css'

export const Loader = ()=>{
    return (
        <section className={styles.loaderWrapper}>
            <div className={styles.loaderSpinner}>
                <img src='/assets/images/krollo-logo.png' />
            </div>
        </section>
    )
}