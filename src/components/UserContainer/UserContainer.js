import UserComponent from "./UserComponent/UserComponent";
import {useEffect, useState} from "react";


const UserContainer = ({users, smth, handleClick, handleDelete}) => {





    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((users) =>{
    //             setUsers(users);
    //         setSmth('Ihor')
    //         })
    //         .catch((errors) => console.log(setErrors(errors.response)))
    //         .finally(() => console.log('Promises finished'))
    // }, [])


    return (
<div>
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
</div>
    )
}
export default UserContainer;