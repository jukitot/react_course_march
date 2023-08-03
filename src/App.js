
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
              email={'oioio@gmail.com'}
              element={firstDiv}
          />
          <UserComponent
              name={'ne Ihor'}
              nickname={'ne dev'}
              email={'nema'}
              element={firstDiv}
          />


      </>
  );
}

export default App;
