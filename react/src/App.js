
import './App.css';
import Header from './Header';
import Main from './Main';

function App({agoraDataArr}) {

  return (
    <div className="App">
      <Header/>
      <Main agoraDataArr={agoraDataArr}/>
    </div>
  );
}

export default App;
