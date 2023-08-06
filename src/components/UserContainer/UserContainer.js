import UserComponent from "./UserComponent/UserComponent";
import {useEffect, useState} from "react";


const UserContainer = () => {

    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState()
    const [smth, setSmth] = useState('qqqq')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) =>{
                setUsers(users);
            setSmth('Ihor')
            })
            .catch((errors) => console.log(setErrors(errors.response)))
            .finally(() => console.log('Promises finished'))
    }, [])

const handleClick = (value) => {
        alert(`User id is: ${value} `)
        // alert(`User id is:`)
}
const handleDelete = (id) => {
        setUsers([...users].filter((user) => user.id !== id))

}

    return (
<>
    <h1>Hello</h1>
    {smth && <p>{smth}</p>}
    {users.map((user, id) => {
        user.phone = '+' + user.phone
        return( <UserComponent
            key={id}
            user={user}
            handleClick={handleClick}
            handleDelete={handleDelete}/>
        )
    })}
</>
    )
}
export default UserContainer;