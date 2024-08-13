import './App.css';
import Cursor from './components/Cursor/Cursor';
import Header from './components/Header/Header';
import svechenie from './assets/свеченте 2.png'
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <Main />
      {/* <img src={''} alt='' className={'kartinka'}/> */}
      <img src={svechenie} alt='' className={'kartinka2'}/>
    </div>
  );
}

export default App;



