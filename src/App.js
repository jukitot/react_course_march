
import './App.css';
import UserComponent from "./components/UserContainer/UserComponent/UserComponent";
import {users, users1} from "./assets/mockData/users";
import UserContainer from "./components/UserContainer/UserContainer";
import {createContext, useEffect, useState} from "react";
const firstDiv = <div>Hello</div>


export const UserContext = createContext(null)
function App() {
    const [users, setUsers] = useState([])
    const [smth, setSmth] = useState('qqqq')
    const [errors, setErrors] = useState()

    // const [users1, setUsers1] = useState([])
    // const [users2, setUsers2] = useState([])
    // useEffect(()=>{
    //     if(users){
    //         setUsers1(users)
    //         setUsers2(users)
    //     }
    // }, [users])

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



    console.log('app render');

    const [show, setShow] = useState(true)
    // setTimeout(() => setShow(false), 5000)
    const handleClick = (value) => {
        alert(`User id is: ${value} `)
        // alert(`User id is:`)
    }

    const handleDelete = (id) => {
        setUsers([...users].filter((user) => user.id !== id))

    }
const contextValue = {users, smth, handleClick, handleDelete}
  return (
      <UserContext.Provider value={contextValue}>

      <div style={{display:"flex"}}>

          <UserContainer/>
          <UserContainer/>
      </div>
</UserContext.Provider>
  );
}

export default App;
