import styles from "./Button.module.css"

const Button = ({name, type, icon}) => {
    return(
            <button type="button" className={type === "lightGold" ? styles.lightGold : type === "darkGold" ? styles.lightGold : null }>
                    <span className={styles.span}>
                        {name}
                    </span>
                    {icon && <img className={styles.img} src={icon} alt="icon" />}
            </button>
    )
}

export default Button;