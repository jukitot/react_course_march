import UserComponent from "./UserComponent/UserComponent";
import {users, users1} from "../../assets/mockData/users";


const UserContainer = () => {
    let allUsers = [];
    // const AllUsers =  [...users,...users1];// .filter((item) => item.name.includes('Leanne'))
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => allUsers.push(users))
        .catch()
    return (
<>
    {console.log(allUsers)}
    {allUsers.map((user, id) => {
        user.phone = '+' + user.phone
        return <UserComponent key={id} user={user}/>
    })}
    {/*{users1.map((user, id) => (<UserComponent key={id} user={user}/>))}*/}
</>
    )
}
export default UserContainer;