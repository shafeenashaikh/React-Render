import './App.css';
import { ObjectUseState } from './Component/ImmutableState/ObjectUseState';
import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';

function App() {
  console.log('UseState Render')
  return (
    <div className="App">
      <ObjectUseState/>
      {/* <UseState/> */}
      {/* <UseReducer/> */}
    </div>
  );
}

export default App;
