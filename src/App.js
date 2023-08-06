
import './App.css';
import UserComponent from "./components/UserContainer/UserComponent/UserComponent";
import {users, users1} from "./assets/mockData/users";
import UserContainer from "./components/UserContainer/UserContainer";
import {useState} from "react";
const firstDiv = <div>Hello</div>
function App() {
    const [show, setShow] = useState(true)

  return (
      <>
          <p>{show ? "Show" : "Hidden"}</p>
          {show && <UserContainer/>}


        {/*{firstDiv}*/}
        {/*<div>*/}
        {/*  Hello World*/}
        {/*</div>*/}
        {/*  <UserComponent*/}
        {/*      name={'Ihor'}*/}
        {/*      nickname={'dev'}*/}
        {/*      email={'oioio@gmail.com'}*/}
        {/*      element={firstDiv}*/}
        {/*  />*/}
        {/*  <UserComponent*/}
        {/*      name={'ne Ihor'}*/}
        {/*      nickname={'ne dev'}*/}
        {/*      email={'nema'}*/}
        {/*      element={firstDiv}*/}
        {/*  />*/}


      </>
  );
}

export default App;
