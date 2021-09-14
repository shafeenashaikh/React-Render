import './App.css';
import { ContextParent } from './Component/Context/ContextParent';
import { ObjectUseState } from './Component/ImmutableState/ObjectUseState';
import { ParentFour } from './Component/IncorrectOptimization/ParentFour';
import { ParentThree } from './Component/IncorrectOptimization/ParentThree';
import { ChildOne } from './Component/Optimization/ChildOne';
import { GrandParent } from './Component/Optimization/GrandParent';
import { ParentOne } from './Component/Optimization/ParentOne';
import { ParentTwo } from './Component/Optimization/ParentTwo';
import { Parent } from './Component/parent child/Parent';
import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';
import ArrayList from './Components/ArrayListOne';
import ArrayListThree from './Components/ArrayListThree';
import ArrayListTwo from './Components/ArrayListTwo';
import NestedArrayList from './Components/NestedArrayList';
import ReuseLoop from './Components/ReusingLoop';

function App() {
  console.log('UseState Render')
  return (
    <div className="App">
      <ReuseLoop/>
      {/* <NestedArrayList/> */}
      {/* <ArrayListThree/> */}
      {/* <ArrayListTwo/> */}
      {/* <ArrayList/> */}
      {/* <ContextParent/> */}
      {/* <ParentFour/> */}
      {/* <ParentThree/> */}
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
