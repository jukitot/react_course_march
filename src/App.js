import logo from './logo.svg';
import './App.css';
import UserComponent from "./components/UserComponent/UserComponent";
const firstDiv = <div>Hello</div>
function App() {
  return (
      <>
        {firstDiv}
        <div>
          Hello World
        </div>
          <UserComponent
              name={'Ihor'}
              nickname={'dev'}
              email={'oioio@gmail.com'}/>


      </>
  );
}

export default App;
