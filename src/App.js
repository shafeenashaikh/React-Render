import './App.css';
import { ObjectUseState } from './Component/ImmutableState/ObjectUseState';
import { ChildOne } from './Component/Optimization/ChildOne';
import { ParentOne } from './Component/Optimization/ParentOne';
import { Parent } from './Component/parent child/Parent';
import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';

function App() {
  console.log('UseState Render')
  return (
    <div className="App">
      <ParentOne>
        <ChildOne/>
      </ParentOne>
      {/* <Parent/> */}
      {/* <ObjectUseState/> */}
      {/* <UseState/> */}
      {/* <UseReducer/> */}
    </div>
  );
}

export default App;
