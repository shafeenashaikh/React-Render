import './App.css';
import { ObjectUseState } from './Component/ImmutableState/ObjectUseState';
import { ChildOne } from './Component/Optimization/ChildOne';
import { GrandParent } from './Component/Optimization/GrandParent';
import { ParentOne } from './Component/Optimization/ParentOne';
import { Parent } from './Component/parent child/Parent';
import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';

function App() {
  console.log('UseState Render')
  return (
    <div className="App">
     <GrandParent/>
      {/* <Parent/> */}
      {/* <ObjectUseState/> */}
      {/* <UseState/> */}
      {/* <UseReducer/> */}
    </div>
  );
}

export default App;
