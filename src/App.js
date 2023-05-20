import logo from "./img/eqw_1.svg"
import logo2 from "./img/SGN_09_24_2022_1663968217400 1.svg"

function App() {
  return (
    <>
      <div>Hello</div>
      <div style={{fontFamily: "Ferry"}}>Hello</div>
      <div style={{background: "black"}}>
        <img src={logo}/>
        <img src={logo2}/>
      </div>
    </>    
  );
}

export default App;
