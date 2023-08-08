import UserComponent from "./UserComponent/UserComponent";
import {createContext, useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";

export const HAHAContext = createContext()
const UserContainer = () => {


const {users, smth} = useContext(UserContext)



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
        <HAHAContext.Provider value={'haha'}>
<div>
    <h1>Hello</h1>
    {smth && <p>{smth}</p>}
    {users.map((user, id) => {
        user.phone = '+' + user.phone
        return(
            <UserComponent
            key={id}
            user={user}
            />
        )
    })}
</div>
        </HAHAContext.Provider>
    )
}
export default UserContainer;