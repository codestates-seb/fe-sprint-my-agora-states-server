import './App.css';
import TweetsDisplay from './pages/TweetsDisplay'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <h1>My Agora States</h1>
      </div>
      <div className='main'>
        <div className='column1'>
        </div>
        <div className='column2'>
          <TweetsDisplay/>
        </div>
        <div className='column3'></div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
