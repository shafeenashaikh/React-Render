import './App.css';
import { ObjectUseState } from './Component/ImmutableState/ObjectUseState';
import { ParentThree } from './Component/IncorrectOptimization/ParentThree';
import { ChildOne } from './Component/Optimization/ChildOne';
import { GrandParent } from './Component/Optimization/GrandParent';
import { ParentOne } from './Component/Optimization/ParentOne';
import { ParentTwo } from './Component/Optimization/ParentTwo';
import { Parent } from './Component/parent child/Parent';
import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';

function App() {
  console.log('UseState Render')
  return (
    <div className="App">
      <ParentThree/>
      {/* <ParentTwo/> */}
     {/* <GrandParent/> */}
      {/* <Parent/> */}
      {/* <ObjectUseState/> */}
      {/* <UseState/> */}
      {/* <UseReducer/> */}
    </div>
  );
}

export default App;
