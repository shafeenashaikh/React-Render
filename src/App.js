import './App.css';
import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';

function App() {
  console.log('UseState Render')
  return (
    <div className="App">
      {/* <UseState/> */}
      <UseReducer/>
    </div>
  );
}

export default App;
