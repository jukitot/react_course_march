import styles from "./UserComponent.module.scss";


const UserComponent = (props) => {
    const {user} = props
    console.log(props);
    return(
        <div className={styles.container}>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
            <h6>{user.phone}</h6>
            <h6>{user.address.city}</h6>

        </div>
    )
}
export default UserComponent;