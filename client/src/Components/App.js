import '../Stylesheets/App.scss';
import Title from './Title';
import Form from './Form';
import Discussions from './Discussions';

function App() {
  return (
    <div className="App d-flex align-items-center">
      <Title/>
      <Form/>
      <Discussions/>
    </div>
  );
}

export default App;
