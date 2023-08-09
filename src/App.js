
import './App.css';
import UserComponent from "./components/UserContainer/UserComponent/UserComponent";
import {users, users1} from "./assets/mockData/users";
import UserContainer from "./components/UserContainer/UserContainer";
import {createContext, useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";

import LoginPageUseForm from "./pages/LoginPageUseForm/LoginPageUseForm";



export const UserContext = createContext(null)
function App() {




  return (
    <LoginPageUseForm/>


  );
}

export default App;
