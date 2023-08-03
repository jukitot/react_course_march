import styles from "./UserComponent.module.scss";

const UserComponent = (props) => {
    const {name, nickname, email, element} = props
    console.log(props);
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>{name}</h1>
            <h1>{nickname}</h1>
            <h1>{email}</h1>
            {element}
        </div>
    )
}
export default UserComponent;